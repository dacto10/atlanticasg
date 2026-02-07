import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "@/app/globals.css"

import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

import { routing } from "@/i18n/routing"
import { ThemeProvider } from "@/provider/theme"
import { GlobalBackground } from "@/components/ui/background"

const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap"
})

function getBaseUrl() {
	const raw = process.env.NEXT_PUBLIC_SITE_URL
	return raw ? new URL(raw) : new URL("http://localhost:3000")
}

export async function generateMetadata({
	params
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) notFound()

	const t = await getTranslations({ locale, namespace: "Metadata" })
	const baseUrl = getBaseUrl()

	const title = t("title")
	const titleSuffix = t("titleSuffix")
	const description = t("description")

	const url = new URL(`/${locale}`, baseUrl)

	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, new URL(`/${l}`, baseUrl).toString()])
	)

	return {
		metadataBase: baseUrl,
		title: `${title} | ${titleSuffix}`,
		description,
		alternates: {
			canonical: url.toString(),
			languages
		},
		openGraph: {
			type: "website",
			url: url.toString(),
			title,
			description,
			siteName: title,
			locale,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description
		},
		robots: {
			index: true,
			follow: true
		},
		icons: {
			icon: "/favicon.ico"
		}
	}
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) notFound()

	setRequestLocale(locale)
	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning className={jakarta.variable}>
			<body className="min-h-dvh bg-background font-[var(--font-sans)] antialiased text-foreground">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
					enableColorScheme
				>
					<NextIntlClientProvider locale={locale} messages={messages}>
						<GlobalBackground />
						<div className="relative z-10">{children}</div>
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
