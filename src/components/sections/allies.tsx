import { getTranslations } from "next-intl/server";

import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { SurfaceCard } from "@/components/ui/surface-card";

import { ArrowUpRight } from "lucide-react";

type Ally = {
	key: string;
	name: string;
	headline: string;
	description: string;
	regionsLabel?: string;
	regions?: string[];
	primaryCtaLabel: string;
	primaryCtaHref: string;
	secondaryCtaLabel?: string;
	secondaryCtaHref?: string;
	disclaimer?: string;
};

function isExternal(href: string) {
	return /^https?:\/\//i.test(href);
}

export async function AlliesSection() {
	const t = await getTranslations("Allies");
	const items = t.raw("items") as Ally[];

	const spotlight = items[0];

	return (
		<Section id="allies" className="section-wash">
			<Reveal>
				<SectionHeader
					titleId="allies-title"
					kicker={t("kicker")}
					title={t("title")}
					subtitle={t("subtitle")}
					align="center"
				/>
			</Reveal>

			<div className="mt-10">
				{items.length === 1 ? (
					<Reveal delayMs={180}>
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
									<div className="absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
									<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
								</div>

								<div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-2 md:items-center">
									<div className="min-w-0">
										<div className="inline-flex items-center rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground ring-1 ring-inset ring-white/5">
											{t("spotlightLabel")}
										</div>

										<div className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
											{spotlight.name}
										</div>

										<div className="mt-2 text-sm font-semibold text-primary">
											{spotlight.headline}
										</div>

										{spotlight.regions?.length ? (
											<div className="mt-5">
												{spotlight.regionsLabel ? (
													<div className="text-xs font-semibold text-muted-foreground">
														{spotlight.regionsLabel}
													</div>
												) : null}

												<div className="mt-2 flex flex-wrap gap-2">
													{spotlight.regions.map((r) => (
														<span
															key={r}
															className="inline-flex items-center rounded-full border border-border/60 bg-card/40 px-2.5 py-1 text-xs text-muted-foreground ring-1 ring-inset ring-white/5"
														>
															{r}
														</span>
													))}
												</div>
											</div>
										) : null}
									</div>

									<div className="min-w-0">
										<p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
											{spotlight.description}
										</p>

										<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
											<Button asChild>
												<a
													href={spotlight.primaryCtaHref}
													target={isExternal(spotlight.primaryCtaHref) ? "_blank" : undefined}
													rel={isExternal(spotlight.primaryCtaHref) ? "noreferrer" : undefined}
													className="inline-flex items-center gap-2"
												>
													{spotlight.primaryCtaLabel}
													<ArrowUpRight className="h-4 w-4" />
												</a>
											</Button>

											{spotlight.secondaryCtaLabel && spotlight.secondaryCtaHref ? (
												<Button variant="outline" asChild>
													<a
														href={spotlight.secondaryCtaHref}
														target={isExternal(spotlight.secondaryCtaHref) ? "_blank" : undefined}
														rel={isExternal(spotlight.secondaryCtaHref) ? "noreferrer" : undefined}
														className="inline-flex items-center gap-2"
													>
														{spotlight.secondaryCtaLabel}
														<ArrowUpRight className="h-4 w-4" />
													</a>
												</Button>
											) : null}
										</div>

										{spotlight.disclaimer ? (
											<p className="mt-3 text-xs text-muted-foreground">
												{spotlight.disclaimer}
											</p>
										) : null}
									</div>
								</div>
							</div>
						</div>
					</Reveal>
				) : (
					<div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{items.map((a, i) => (
							<Reveal key={a.key} delayMs={140 + i * 70}>
								<SurfaceCard className="h-full">
									<div className="p-6">
										<div className="text-lg font-semibold tracking-tight">{a.name}</div>
										<div className="mt-1 text-sm font-semibold text-primary">{a.headline}</div>
										<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
											{a.description}
										</p>

										<div className="mt-5 flex flex-wrap gap-2">
											{a.regions?.map((r) => (
												<span
													key={r}
													className="inline-flex items-center rounded-full border border-border/60 bg-card/40 px-2.5 py-1 text-xs text-muted-foreground ring-1 ring-inset ring-white/5"
												>
													{r}
												</span>
											))}
										</div>

										<div className="mt-6 flex flex-col gap-3 sm:flex-row">
											<Button asChild>
												<a
													href={a.primaryCtaHref}
													target={isExternal(a.primaryCtaHref) ? "_blank" : undefined}
													rel={isExternal(a.primaryCtaHref) ? "noreferrer" : undefined}
													className="inline-flex items-center gap-2"
												>
													{a.primaryCtaLabel}
													<ArrowUpRight className="h-4 w-4" />
												</a>
											</Button>

											{a.secondaryCtaLabel && a.secondaryCtaHref ? (
												<Button variant="outline" asChild>
													<a
														href={a.secondaryCtaHref}
														target={isExternal(a.secondaryCtaHref) ? "_blank" : undefined}
														rel={isExternal(a.secondaryCtaHref) ? "noreferrer" : undefined}
														className="inline-flex items-center gap-2"
													>
														{a.secondaryCtaLabel}
														<ArrowUpRight className="h-4 w-4" />
													</a>
												</Button>
											) : null}
										</div>

										{a.disclaimer ? (
											<p className="mt-3 text-xs text-muted-foreground">{a.disclaimer}</p>
										) : null}
									</div>
								</SurfaceCard>
							</Reveal>
						))}
					</div>
				)}
			</div>
		</Section>
	);
}
