import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

import { Boxes, Globe2, Truck } from "lucide-react";

const ICONS = {
	products: Boxes,
	coverage: Globe2,
	logistics: Truck
} as const;

type CapabilityKey = keyof typeof ICONS;

export async function HeroSection() {
	const t = await getTranslations("Hero");

	const chips = t.raw("chips") as string[];
	const capabilities = t.raw("capabilities") as Array<{
		key: CapabilityKey;
		title: string;
		description: string;
	}>;

	return (
		<Section id="hero" className="pt-10 md:pt-14">
			<div className="mx-auto max-w-3xl text-center">
				<Reveal delayMs={0}>
					<p className="inline-flex items-center rounded-full border border-foreground/10 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
						{t("kicker")}
					</p>
				</Reveal>

				<Reveal delayMs={80}>
					<h1
						id="hero-title"
						className="mt-4 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl"
					>
						{t("title")}
					</h1>
				</Reveal>

				<Reveal delayMs={140}>
					<p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
						{t("subtitle")}
					</p>
				</Reveal>

				<Reveal delayMs={200}>
					<div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
						<Button asChild className="rounded-full px-6">
							<Link href="/#contact">{t("actions.quote")}</Link>
						</Button>

						<Button asChild variant="secondary" className="rounded-full px-6">
							<a href={t("actions.whatsappHref")} target="_blank" rel="noreferrer">
								{t("actions.whatsapp")}
							</a>
						</Button>
					</div>
				</Reveal>

				<Reveal delayMs={260}>
					<div className="mt-6 flex flex-wrap justify-center gap-2">
						{chips.map((c) => (
							<span
								key={c}
								className="inline-flex items-center rounded-full border border-foreground/10 bg-background/40 px-3 py-1 text-xs text-muted-foreground"
							>
								{c}
							</span>
						))}
					</div>
				</Reveal>
			</div>

			<div className="mt-10 grid gap-4 md:grid-cols-3">
				{capabilities.map((cap, i) => {
					const Icon = ICONS[cap.key];

					return (
						<Reveal key={cap.key} delayMs={320 + i * 90}>
							<div className="rounded-2xl border border-foreground/10 bg-background/60 p-5 text-left shadow-sm">
								<div className="flex items-start gap-3">
									<div className="mt-0.5 inline-flex p-2 items-center justify-center rounded-full border border-foreground/10 bg-background">
										<Icon className="h-5 w-5 text-primary" />
									</div>

									<div>
										<h2 className="text-sm font-semibold text-foreground">
											{cap.title}
										</h2>
										<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
											{cap.description}
										</p>
									</div>
								</div>
							</div>
						</Reveal>
					);
				})}
			</div>
		</Section>
	);
}
