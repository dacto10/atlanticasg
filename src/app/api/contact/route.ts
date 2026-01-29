import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const LIMITS = {
	name: 120,
	company: 120,
	email: 254,
	phone: 40,
	message: 2000,
} as const;

function getString(fd: FormData, key: string) {
	const v = fd.get(key);
	return typeof v === "string" ? v.trim() : "";
}

function clampSpaces(value: string) {
	return value.replace(/\s+/g, " ").trim();
}

function isValidEmail(email: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function tooLong(value: string, max: number) {
	return value.length > max;
}

function countUrls(text: string) {
	const matches = text.match(/https?:\/\/\S+/gi);
	return matches?.length ?? 0;
}

function redirectBack(req: Request, status: "success" | "invalid" | "error") {
	const referer = req.headers.get("referer");
	const base = referer ? new URL(referer) : new URL("/", req.url);

	base.searchParams.set("contact", status);
	base.hash = "contact";

	return NextResponse.redirect(base, { status: 303 });
}

export async function POST(req: Request) {
	try {
		const fd = await req.formData();

		const website = getString(fd, "website");
		if (website) return redirectBack(req, "success");

		const name = clampSpaces(getString(fd, "name"));
		const company = clampSpaces(getString(fd, "company"));
		const emailRaw = getString(fd, "email").replace(/[\r\n]/g, "");
		const email = emailRaw.toLowerCase();
		const phone = clampSpaces(getString(fd, "phone"));
		const message = getString(fd, "message");

		if (
			!name ||
			name.length < 2 ||
			!email ||
			!isValidEmail(email) ||
			!message ||
			message.length < 10
		) {
			return redirectBack(req, "invalid");
		}

		if (
			tooLong(name, LIMITS.name) ||
			tooLong(company, LIMITS.company) ||
			tooLong(email, LIMITS.email) ||
			tooLong(phone, LIMITS.phone) ||
			tooLong(message, LIMITS.message)
		) {
			return redirectBack(req, "invalid");
		}

		if (countUrls(message) > 3) {
			return redirectBack(req, "invalid");
		}

		const RESEND_API_KEY = process.env.RESEND_API_KEY;
		const CONTACT_FROM = process.env.CONTACT_FROM;
		const CONTACT_TO = process.env.CONTACT_TO;

		if (!RESEND_API_KEY || !CONTACT_FROM || !CONTACT_TO) {
			return redirectBack(req, "error");
		}

		const subject = `[ASG] Quote request from ${name}`;
		const text = [
			`Name: ${name}`,
			`Email: ${email}`,
			company ? `Company: ${company}` : null,
			phone ? `Phone: ${phone}` : null,
			"",
			"Message:",
			message,
		]
			.filter(Boolean)
			.join("\n");

		const { error } = await resend.emails.send({
			from: CONTACT_FROM,
			to: CONTACT_TO.split(",").map((s) => s.trim()),
			subject,
			text,
			replyTo: email,
		});

		if (error) return redirectBack(req, "error");

		return redirectBack(req, "success");
	} catch {
		return redirectBack(req, "error");
	}
}
