import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/reveal";
import { SurfaceCard } from "@/components/ui/surface-card";

type Testimonial = {
	quote: string;
	name?: string;
	role?: string;
	company?: string;
	region?: string;
	industry?: string;
};

function normalizeAttribution(item: Testimonial) {
	const company = item.company?.trim();
	const name = item.name?.trim();

	const primary = company || name || "Client";

	const secondaryCandidates = [
		item.role?.trim(),
		name && name !== primary ? name : null,
	].filter(Boolean) as string[];

	return { primary, secondary: secondaryCandidates[0] };
}

export async function TestimonialsSection() {
	const t = await getTranslations("Testimonials");
	const items = t.raw("items") as Testimonial[];

	return (
		<Section id="testimonials">
			<Reveal>
				<SectionHeader
					titleId="testimonials-title"
					kicker={t("kicker")}
					title={t("title")}
					subtitle={t("subtitle")}
					align="center"
				/>
			</Reveal>

			<div className="mt-10 mx-auto max-w-6xl">
				<div className="grid gap-6 sm:grid-cols-2">
					{items.map((item, i) => {
						const { primary, secondary } = normalizeAttribution(item);

						return (
							<Reveal key={`${primary}-${i}`} delayMs={140 + i * 70}>
								<SurfaceCard className="relative h-full">
									<div className="relative px-8 py-3">
										<div
											aria-hidden
											className="pointer-events-none absolute right-8 top-0 select-none text-7xl font-semibold text-primary/80"
										>
											“
										</div>

										<div className="flex h-full flex-col">
											<blockquote className="text-sm leading-relaxed text-foreground/90 sm:text-base italic pr-6">
												<span className="text-muted-foreground">“</span>
												{item.quote}
												<span className="text-muted-foreground">”</span>
											</blockquote>

											<div className="mt-6 flex-1" />

											<div className="border-t border-border/60 pt-5">
												<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
													<div className="min-w-0">
														<div className="text-sm font-semibold tracking-tight">
															{primary}
														</div>
														{secondary ? (
															<div className="mt-1 text-sm text-muted-foreground">
																{secondary}
															</div>
														) : null}
													</div>

													{(item.region || item.industry) ? (
														<div className="flex flex-wrap gap-2 sm:justify-end">
															{item.region ? (
																<span className="inline-flex items-center rounded-full border border-border/60 bg-card/40 px-2.5 py-1 text-xs text-muted-foreground ring-1 ring-inset ring-white/5">
																	{item.region}
																</span>
															) : null}
															{item.industry ? (
																<span className="inline-flex items-center rounded-full border border-border/60 bg-card/40 px-2.5 py-1 text-xs text-muted-foreground ring-1 ring-inset ring-white/5">
																	{item.industry}
																</span>
															) : null}
														</div>
													) : null}
												</div>
											</div>
										</div>
									</div>
								</SurfaceCard>
							</Reveal>
						);
					})}
				</div>
			</div>
		</Section>
	);
}
