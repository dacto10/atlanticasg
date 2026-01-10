import { cn } from "@/lib/utils";

export function SectionHeader({
	kicker,
	title,
	subtitle,
	align = "center",
	titleId,
	className
}: {
	kicker?: string;
	title: string;
	subtitle?: string;
	align?: "left" | "center";
	titleId?: string;
	className?: string;
}) {
	return (
		<header
			className={cn(
				"space-y-3",
				align === "center" ? "text-center" : "text-left",
				className
			)}
		>
			{kicker ? (
				<p className="inline-flex items-center rounded-full border border-foreground/10 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
					{kicker}
				</p>
			) : null}

			<h2
				id={titleId}
				className="text-pretty text-2xl font-semibold tracking-tight sm:text-3xl"
			>
				{title}
			</h2>

			{subtitle ? (
				<p className="mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
					{subtitle}
				</p>
			) : null}
		</header>
	);
}
