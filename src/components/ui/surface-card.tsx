import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function SurfaceCard({
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof Card>) {
	return (
		<Card
			className={cn(
				"relative isolate h-full overflow-hidden rounded-2xl bg-card text-card-foreground",
				"border border-border/60",
				"shadow-[0_1px_0_rgba(255,255,255,0.55),0_14px_38px_-30px_rgba(0,0,0,0.35)]",
				"dark:shadow-[0_1px_0_rgba(255,255,255,0.06),0_16px_44px_-32px_rgba(0,0,0,0.9)]",
				"before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-0 before:h-px",
				"before:bg-gradient-to-r before:from-transparent before:via-primary/35 before:to-transparent before:content-['']",
				"after:pointer-events-none after:absolute after:inset-0 after:z-0 after:content-['']",
				"after:bg-gradient-to-b after:from-primary/7 after:to-transparent after:opacity-0 after:transition-opacity",
				"transition-transform transition-shadow transition-colors",
				"motion-reduce:transition-none",
				"hover:-translate-y-0.5 hover:border-border/80 hover:after:opacity-100",
				"hover:shadow-[0_1px_0_rgba(255,255,255,0.65),0_22px_70px_-48px_rgba(0,0,0,0.45)]",
				"dark:hover:shadow-[0_1px_0_rgba(255,255,255,0.08),0_22px_70px_-48px_rgba(0,0,0,0.98)]",
				className
			)}
			{...props}
		/>
	);
}
