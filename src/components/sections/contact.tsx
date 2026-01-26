import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/reveal";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { ArrowUpRight, Mail, Send } from "lucide-react";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.15-.198.297-.768.967-.942 1.165-.173.198-.347.223-.644.074-.297-.148-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.01-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.83 9.83 0 0 1 6.982 2.893 9.825 9.825 0 0 1 2.895 6.983c-.002 5.45-4.437 9.884-9.89 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05.003C5.495.003.16 5.338.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.867 11.867 0 0 0 5.741 1.468h.005c6.554 0 11.89-5.335 11.893-11.89a11.82 11.82 0 0 0-3.48-8.413Z" />
		</svg>
	);
}

function isExternal(href: string) {
	return /^https?:\/\//i.test(href);
}

export async function ContactSection() {
	const t = await getTranslations("Contact");

	const whatsappHref = t("channels.whatsappHref");
	const emailHref = t("channels.emailHref");

	return (
		<Section id="contact">
			<Reveal>
				<SectionHeader
					titleId="contact-title"
					kicker={t("kicker")}
					title={t("title")}
					subtitle={t("subtitle")}
					align="center"
				/>
			</Reveal>

			<div className="mt-10">
				<div
					className={[
						"mx-auto max-w-6xl",
						"relative rounded-3xl p-px",
						"bg-gradient-to-b from-border/80 via-border/35 to-border/80",
						"shadow-[0_1px_0_rgba(255,255,255,0.55),0_22px_70px_-55px_rgba(0,0,0,0.35)]",
						"dark:shadow-[0_1px_0_rgba(255,255,255,0.06),0_26px_90px_-60px_rgba(0,0,0,0.95)]",
					].join(" ")}
				>
					<div className="relative overflow-hidden rounded-3xl bg-card/92">
						<div className="pointer-events-none absolute inset-0">
							<div className="absolute -top-28 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-primary/16 blur-3xl" />
							<div className="absolute -bottom-28 left-1/3 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
							<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
						</div>

						<div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
							<Reveal delayMs={140}>
								<div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-6 ring-1 ring-inset ring-white/5 sm:p-7">
									<div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

									<div className="inline-flex items-center rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground ring-1 ring-inset ring-white/5">
										{t("channelsPill")}
									</div>

									<div className="mt-4 text-lg font-semibold tracking-tight sm:text-xl">
										{t("channelsTitle")}
									</div>
									<p className="mt-2 text-sm text-muted-foreground">
										{t("channelsSubtitle")}
									</p>

									<div className="mt-6 grid gap-3">
										<div className="rounded-2xl p-px bg-gradient-to-b from-border/80 via-border/35 to-border/80">
											<a
												href={whatsappHref}
												target={isExternal(whatsappHref) ? "_blank" : undefined}
												rel={isExternal(whatsappHref) ? "noreferrer" : undefined}
												className={[
													"group block rounded-2xl bg-card/70 p-4",
													"ring-1 ring-inset ring-white/5 transition-colors",
													"hover:bg-primary/7",
												].join(" ")}
											>
												<div className="flex items-start gap-3">
													<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-inset ring-primary/15">
														<WhatsAppIcon className="h-5 w-5" />
													</div>

													<div className="min-w-0 flex-1">
														<div className="flex items-center gap-2 text-sm font-semibold">
															{t("channels.whatsappLabel")}
															<ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
														</div>
														<p className="mt-1 text-sm text-muted-foreground">
															{t("channels.whatsappDescription")}
														</p>
													</div>
												</div>
											</a>
										</div>

										<div className="rounded-2xl p-px bg-gradient-to-b from-border/80 via-border/35 to-border/80">
											<a
												href={emailHref}
												className={[
													"group block rounded-2xl bg-card/70 p-4",
													"ring-1 ring-inset ring-white/5 transition-colors",
													"hover:bg-primary/7",
												].join(" ")}
											>
												<div className="flex items-start gap-3">
													<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-inset ring-primary/15">
														<Mail className="h-5 w-5" />
													</div>

													<div className="min-w-0 flex-1">
														<div className="flex items-center gap-2 text-sm font-semibold">
															{t("channels.emailLabel")}
															<ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
														</div>
														<p className="mt-1 text-sm text-muted-foreground">
															{t("channels.emailDescription")}
														</p>
													</div>
												</div>
											</a>
										</div>
									</div>

									<div className="mt-6 rounded-2xl border border-border/60 bg-card/60 p-4 text-sm text-muted-foreground ring-1 ring-inset ring-white/5">
										{t("note")}
									</div>
								</div>
							</Reveal>

							<Reveal delayMs={200}>
								<div className="rounded-3xl p-px bg-gradient-to-b from-border/80 via-border/35 to-border/80">
									<div className="relative overflow-hidden rounded-3xl bg-card/55 p-6 ring-1 ring-inset ring-white/5 sm:p-7">
										<div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

										<div className="flex items-start justify-between gap-4">
											<div>
												<div className="text-sm font-semibold tracking-tight">
													{t("formTitle")}
												</div>
												<p className="mt-1 text-sm text-muted-foreground">
													{t("formSubtitle")}
												</p>
											</div>

											<div className="hidden sm:flex items-center gap-2">
												<Button variant="outline" size="sm" asChild>
													<a href={emailHref} className="inline-flex items-center gap-2">
														<Mail className="h-4 w-4" />
														{t("channels.emailCta")}
													</a>
												</Button>
												<Button variant="outline" size="sm" asChild>
													<a
														href={whatsappHref}
														target={isExternal(whatsappHref) ? "_blank" : undefined}
														rel={isExternal(whatsappHref) ? "noreferrer" : undefined}
														className="inline-flex items-center gap-2"
													>
														<WhatsAppIcon className="h-4 w-4" />
														{t("channels.whatsappCta")}
													</a>
												</Button>
											</div>
										</div>

										<form className="mt-6 grid gap-4">
											<div className="grid gap-4 sm:grid-cols-2">
												<div className="grid gap-2">
													<Label htmlFor="name">{t("form.name")}</Label>
													<Input
														id="name"
														name="name"
														className="rounded-2xl bg-background/30 border-border/60 focus-visible:ring-primary/25"
													/>
												</div>

												<div className="grid gap-2">
													<Label htmlFor="company">{t("form.company")}</Label>
													<Input
														id="company"
														name="company"
														className="rounded-2xl bg-background/30 border-border/60 focus-visible:ring-primary/25"
													/>
												</div>
											</div>

											<div className="grid gap-4 sm:grid-cols-2">
												<div className="grid gap-2">
													<Label htmlFor="email">{t("form.email")}</Label>
													<Input
														id="email"
														name="email"
														type="email"
														className="rounded-2xl bg-background/30 border-border/60 focus-visible:ring-primary/25"
													/>
												</div>

												<div className="grid gap-2">
													<Label htmlFor="phone">{t("form.phone")}</Label>
													<Input
														id="phone"
														name="phone"
														className="rounded-2xl bg-background/30 border-border/60 focus-visible:ring-primary/25"
													/>
												</div>
											</div>

											<div className="grid gap-2">
												<Label htmlFor="message">{t("form.message")}</Label>
												<Textarea
													id="message"
													name="message"
													rows={5}
													className="rounded-2xl bg-background/30 border-border/60 focus-visible:ring-primary/25"
												/>
												<p className="text-xs text-muted-foreground">{t("form.helper")}</p>
											</div>

											<Button type="button" className="inline-flex items-center gap-2">
												<Send className="h-4 w-4" />
												{t("form.submit")}
											</Button>
										</form>
									</div>
								</div>
							</Reveal>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
