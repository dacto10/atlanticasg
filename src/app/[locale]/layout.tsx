import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { setRequestLocale, getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/provider/theme";

const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

// export async function generateMetadata({
// 	params,
// }: {
// 	params: Promise<{ locale: string }>;
// }): Promise<Metadata> {
// 	const { locale } = await params;
// 	if (!hasLocale(routing.locales, locale)) notFound();

// 	const t = await getTranslations({ locale, namespace: "Metadata" });

// 	const title = t("title");
// 	const description = t("description");

// 	return {
// 		title: { default: title, template: `%s | ${title}` },
// 		description,
// 		openGraph: { title, description, locale },
// 		twitter: { card: "summary_large_image", title, description },
// 	};
// }

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) notFound();

	setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${jakarta.variable} font-[var(--font-sans)] antialiased min-h-dvh`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
					enableColorScheme={false}
				>
					<NextIntlClientProvider messages={messages}>
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
