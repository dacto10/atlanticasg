import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/reveal";

import {
	Globe2,
	ShieldCheck,
	SlidersHorizontal,
	Compass,
	Building2,
} from "lucide-react";

type Pillar = {
	key: "multiRegion" | "redundancy" | "spec";
	title: string;
	description: string;
	bullets: string[];
};

type Region = {
	key: "americas" | "europe" | "asia";
	title: string;
	summary: string;
	chips: string[];
};

type Proof = {
	label: string;
	description: string;
};

const PILLAR_ICONS: Record<Pillar["key"], React.ComponentType<{ className?: string }>> =
{
	multiRegion: Globe2,
	redundancy: ShieldCheck,
	spec: SlidersHorizontal,
};

const REGION_ICONS: Record<Region["key"], React.ComponentType<{ className?: string }>> =
{
	americas: Compass,
	europe: Building2,
	asia: Globe2
};

function Frame({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={[
				"relative rounded-3xl p-px",
				"bg-gradient-to-b from-border/80 via-border/35 to-border/80",
				"shadow-[0_1px_0_rgba(255,255,255,0.55),0_22px_70px_-55px_rgba(0,0,0,0.35)]",
				"dark:shadow-[0_1px_0_rgba(255,255,255,0.06),0_26px_90px_-60px_rgba(0,0,0,0.95)]",
			].join(" ")}
		>
			<div className="overflow-hidden rounded-3xl bg-border/50">{children}</div>
		</div>
	);
}

export async function ProvidersSection() {
	const t = await getTranslations("Providers");

	const pillars = t.raw("pillars") as Pillar[];
	const regions = t.raw("regions") as Region[];
	const proofs = t.raw("proofs") as Proof[];

	return (
		<Section id="providers">
			<Reveal>
				<SectionHeader
					titleId="providers-title"
					kicker={t("kicker")}
					title={t("title")}
					subtitle={t("subtitle")}
					align="center"
				/>
			</Reveal>

			<div className="mt-10">
				<Frame>
					<div className="grid gap-px bg-border/50 lg:grid-cols-2">
						<Reveal delayMs={140}>
							<div className="bg-card/92 p-6 sm:p-7">
								<div className="text-sm font-semibold tracking-tight">
									{t("pillarsTitle")}
								</div>
								<p className="mt-1 text-sm text-muted-foreground">
									{t("pillarsSubtitle")}
								</p>

								<div className="mt-6 divide-y divide-border/70 rounded-2xl border border-border/60 bg-card/40 ring-1 ring-inset ring-white/5">
									{pillars.map((p) => {
										const Icon = PILLAR_ICONS[p.key];

										return (
											<div key={p.key} className="p-5">
												<div className="flex items-start gap-3">
													<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/15">
														<Icon className="h-5 w-5" />
													</div>

													<div className="min-w-0">
														<div className="text-sm font-semibold tracking-tight">
															{p.title}
														</div>
														<p className="mt-1 text-sm text-muted-foreground">
															{p.description}
														</p>

														<ul className="mt-3 space-y-2">
															{p.bullets.map((b) => (
																<li
																	key={b}
																	className="flex items-start gap-2 text-sm"
																>
																	<span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-primary/60" />
																	<span className="text-muted-foreground">
																		{b}
																	</span>
																</li>
															))}
														</ul>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</Reveal>

						<Reveal delayMs={200}>
							<div className="bg-card/92 p-6 sm:p-7 h-full">
								<div className="text-sm font-semibold tracking-tight">
									{t("regionsTitle")}
								</div>
								<p className="mt-1 text-sm text-muted-foreground">
									{t("regionsSubtitle")}
								</p>

								<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
									{regions.map((r) => {
										const Icon = REGION_ICONS[r.key];

										return (
											<div
												key={r.key}
												className="rounded-2xl border border-border/60 bg-card/40 p-5 ring-1 ring-inset ring-white/5"
											>
												<div className="flex items-start gap-3">
													<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/15">
														<Icon className="h-5 w-5" />
													</div>

													<div className="min-w-0">
														<div className="text-sm font-semibold tracking-tight">
															{r.title}
														</div>
														<p className="mt-1 text-sm text-muted-foreground">
															{r.summary}
														</p>
													</div>
												</div>

												<div className="mt-4 flex flex-wrap gap-2">
													{r.chips.map((c) => (
														<span
															key={c}
															className={[
																"inline-flex items-center rounded-md px-2 py-0.5 text-[11px] leading-5",
																"bg-muted/50 text-muted-foreground",
																"ring-1 ring-inset ring-border/70",
															].join(" ")}
														>
															{c}
														</span>
													))}
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</Reveal>
					</div>
				</Frame>

				<div className="mt-5">
					<Frame>
						<div className="grid gap-px bg-border/50 sm:grid-cols-3">
							{proofs.map((p, i) => (
								<Reveal key={`${p.label}-${i}`} delayMs={260 + i * 60}>
									<div className="bg-card/92 px-5 py-5 sm:px-6">
										<div className="text-sm font-semibold tracking-tight">
											{p.label}
										</div>
										<div className="mt-1 text-sm text-muted-foreground">
											{p.description}
										</div>
									</div>
								</Reveal>
							))}
						</div>
					</Frame>
				</div>
			</div>
		</Section>
	);
}
