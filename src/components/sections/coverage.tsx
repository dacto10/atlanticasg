import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/reveal";

import {
	FileText,
	Boxes,
	Ship,
	Globe,
	MapPin
} from "lucide-react";

type Stat = { value: string; label: string };
type Region = { key: string; title: string; summary: string; items: string[] };
type Capability = { key: string; title: string; description: string };


export async function CoverageSection() {
	const t = await getTranslations("Coverage");

	const stats = t.raw("stats") as Stat[];
	const regions = t.raw("regions") as Region[];
	const capabilities = t.raw("capabilities") as Capability[];

	return (
		<Section id="coverage" className="section-wash">
			<Reveal>
				<SectionHeader
					titleId="coverage-title"
					kicker={t("kicker")}
					title={t("title")}
					subtitle={t("subtitle")}
					align="center"
				/>
			</Reveal>

			<div className="mt-10">
				<div
					className={[
						"relative rounded-3xl p-px",
						"bg-gradient-to-b from-border/80 via-border/35 to-border/80",
						"shadow-[0_1px_0_rgba(255,255,255,0.55),0_22px_70px_-55px_rgba(0,0,0,0.35)]",
						"dark:shadow-[0_1px_0_rgba(255,255,255,0.06),0_26px_90px_-60px_rgba(0,0,0,0.95)]",
					].join(" ")}
				>
					<div className="relative overflow-hidden rounded-3xl bg-border/50">
						<div className="relative grid gap-px bg-border/50">
							<div className="grid gap-px sm:grid-cols-3">
								{stats.map((s, i) => (
									<Reveal key={`${s.value}-${i}`} delayMs={120 + i * 60}>
										<div className="group relative bg-card/92 px-5 py-6 sm:px-6">
											<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
												<div className="absolute inset-0 bg-gradient-to-b from-primary/7 to-transparent" />
											</div>

											<div className="relative z-10">
												<div className="text-2xl font-semibold tracking-tight sm:text-3xl">
													{s.value}
												</div>
												<div className="mt-1 text-sm text-muted-foreground">
													{s.label}
												</div>
											</div>
										</div>
									</Reveal>
								))}
							</div>

							<div className="grid gap-px lg:grid-cols-2">
								<Reveal delayMs={320}>
									<div className="relative bg-card/92 p-6 h-full">
										<div className="relative z-10 flex items-center gap-2 text-sm font-semibold">
											<Globe className="h-4 w-4 text-primary" />
											<span>{t("regionsTitle")}</span>
										</div>

										<div className="mt-5 grid gap-4 sm:grid-cols-2">
											{regions.map((r) => (
												<div
													key={r.key}
													className="rounded-2xl border border-border/60 bg-card/40 p-4 ring-1 ring-inset ring-white/5"
												>
													<div className="flex items-start gap-2">
														<div className="mt-0.5 inline-flex p-2 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-inset ring-primary/15">
															<MapPin className="h-4 w-4" />
														</div>

														<div className="min-w-0">
															<div className="text-sm font-semibold tracking-tight">
																{r.title}
															</div>
															<div className="mt-1 text-sm text-muted-foreground">
																{r.summary}
															</div>
														</div>
													</div>

													<ul className="mt-3 space-y-2">
														{r.items.map((item) => (
															<li key={item} className="flex items-start gap-2 text-sm">
																<span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-primary/60" />
																<span className="text-muted-foreground">{item}</span>
															</li>
														))}
													</ul>
												</div>
											))}
										</div>
									</div>
								</Reveal>

								<Reveal delayMs={380}>
									<div className="relative bg-card/92 p-6">
										<div className="relative z-10 flex items-center gap-2 text-sm font-semibold">
											<Ship className="h-4 w-4 text-primary" />
											<span>{t("capabilitiesTitle")}</span>
										</div>

										<div className="mt-5">

											<div className="space-y-3">
												{capabilities.map((c) => {
													const Icon =
														c.key === "docs"
															? FileText
															: c.key === "consolidation"
																? Boxes
																: Ship;

													return (
														<div
															key={c.key}
															className="grid items-center gap-4"
														>

															<div className="rounded-2xl border border-border/60 bg-card/88 p-4 ring-1 ring-inset ring-white/5">
																<div className="flex items-start gap-3">
																	<div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/15">
																		<Icon className="h-4 w-4" />
																	</div>

																	<div className="min-w-0">
																		<div className="text-sm font-semibold tracking-tight">
																			{c.title}
																		</div>
																		<p className="mt-1 text-sm text-muted-foreground">
																			{c.description}
																		</p>
																	</div>
																</div>
															</div>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</Reveal>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
