import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/reveal";

import {
	Sprout,
	UtensilsCrossed,
	Pill,
	Brush,
	SprayCan,
	Anchor,
	HardHat,
	Truck,
	Zap,
} from "lucide-react";

type IndustryKey =
	| "agriculture"
	| "food"
	| "pharma"
	| "cosmetics"
	| "cleaning"
	| "marine"
	| "construction"
	| "transport"
	| "energy";

const ICONS: Record<IndustryKey, React.ComponentType<{ className?: string }>> = {
	agriculture: Sprout,
	food: UtensilsCrossed,
	pharma: Pill,
	cosmetics: Brush,
	cleaning: SprayCan,
	marine: Anchor,
	construction: HardHat,
	transport: Truck,
	energy: Zap,
};

type Industry = {
	key: IndustryKey;
	title: string;
	description: string;
};

export async function IndustriesSection() {
	const t = await getTranslations("Industries");
	const items = t.raw("items") as Industry[];

	return (
		<Section id="industries">
			<Reveal>
				<SectionHeader
					titleId="industries-title"
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
						<div className="pointer-events-none absolute inset-0">
							<div className="absolute -top-28 left-[-20%] h-80 w-[140%] bg-[radial-gradient(900px_420px_at_15%_0%,hsl(var(--primary)/0.18),transparent_65%)]" />
							<div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--primary)/0.08),transparent_48%,hsl(var(--primary)/0.05))]" />
						</div>

						<div className="relative grid gap-px sm:grid-cols-2 lg:grid-cols-3">
							{items.map((it, i) => {
								const Icon = ICONS[it.key];

								return (
									<Reveal key={it.key} delayMs={100 + i * 50}>
										<div className="group relative bg-card px-5 py-6 sm:px-6 h-full">
											<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
												<div className="absolute inset-0 bg-gradient-to-b from-primary/7 to-transparent" />
											</div>

											<div className="relative flex items-start gap-4">
												<div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/15 transition-colors group-hover:bg-primary/12">
													<Icon className="h-5 w-5" />
												</div>

												<div className="min-w-0">
													<h3 className="text-sm font-semibold tracking-tight">
														{it.title}
													</h3>
													<p className="mt-1 text-sm text-muted-foreground">
														{it.description}
													</p>
												</div>
											</div>
										</div>
									</Reveal>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
