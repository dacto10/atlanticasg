import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/reveal";
import { SurfaceCard } from "@/components/ui/surface-card";

import {
	FlaskConical,
	Sparkles,
	Layers,
	Package,
	Droplet,
	HardHat
} from "lucide-react";
import { cn } from "@/lib/utils";

type CategoryKey =
	| "chemicals"
	| "cleaning"
	| "metals"
	| "packaging"
	| "lubricants"
	| "construction";

const ICONS: Record<CategoryKey, React.ComponentType<{ className?: string }>> = {
	chemicals: FlaskConical,
	cleaning: Sparkles,
	metals: Layers,
	packaging: Package,
	lubricants: Droplet,
	construction: HardHat
};

type Category = {
	key: CategoryKey;
	title: string;
	description: string;
	examples: string[];
};

export async function ProductsSection() {
	const t = await getTranslations("Products");
	const categories = t.raw("categories") as Category[];

	return (
		<Section id="products" className="section-wash">
			<Reveal>
				<SectionHeader
					titleId="products-title"
					kicker={t("kicker")}
					title={t("title")}
					subtitle={t("subtitle")}
					align="center"
				/>
			</Reveal>

			<div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
				{categories.map((cat, i) => {
					const Icon = ICONS[cat.key];

					return (
						<Reveal key={cat.key} delayMs={120 + i * 60}>
							<SurfaceCard className="group">
								<div className="relative z-10 p-6">
									<div className="flex items-start gap-3">
										<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/15">
											<Icon className="h-5 w-5" />
										</div>

										<div className="min-w-0">
											<h3 className="text-base font-semibold leading-tight">{cat.title}</h3>
											<p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
										</div>
									</div>

									<div className="mt-5 border-t border-border/60 pt-4">
										<span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
											{t("examplesLabel")}
										</span>

										<div className="mt-2 flex flex-wrap gap-1.5">
											{cat.examples.map((ex) => (
												<span
													key={ex}
													className={cn(
														"inline-flex items-center rounded-md px-2 py-0.5 text-[11px] leading-5",
														"bg-muted/50 text-muted-foreground",
														"ring-1 ring-inset ring-border/60",
														"group-hover:text-foreground/80 group-hover:ring-border/80"
													)}
												>
													{ex}
												</span>
											))}
										</div>
									</div>
								</div>
							</SurfaceCard>

						</Reveal>
					);
				})}
			</div>

			<Reveal delayMs={520}>
				<p className="mt-8 text-center text-sm text-muted-foreground">
					{t("note")}
				</p>
			</Reveal>
		</Section>
	);
}
