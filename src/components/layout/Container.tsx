import { cn } from "@/lib/utils";
import { HTMLAttributes, ElementType } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
	as?: ElementType;
};

export function Container({ as: Comp = "div", className, ...props }: ContainerProps) {
	return (
		<Comp
			className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
			{...props}
		/>
	);
}
