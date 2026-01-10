import * as React from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

export function SurfaceCard({
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof Card>) {
	return (
		<Card
			className={cn(
				"relative h-full overflow-hidden rounded-2xl",
				"bg-card text-card-foreground border border-foreground/10 shadow-none",
				"ring-1 ring-inset ring-foreground/5",
				"before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/40 before:to-transparent before:content-['']",
				"transition will-change-transform",
				"hover:-translate-y-0.5 hover:border-foreground/15",
				"hover:shadow-[0_18px_60px_-40px_rgba(0,0,0,0.35)]",
				"dark:hover:shadow-[0_18px_60px_-40px_rgba(0,0,0,0.85)]",
				"after:absolute after:inset-0 after:bg-gradient-to-b after:from-primary/5 after:to-transparent after:opacity-0 after:transition-opacity after:content-['']",
				"hover:after:opacity-100",
				className
			)}
			{...props}
		/>
	)
}
