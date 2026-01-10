import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
	id: string;
};

export function Section({ id, className, children, ...props }: SectionProps) {
	const titleId = `${id}-title`;

	return (
		<section
			id={id}
			aria-labelledby={titleId}
			className={cn("scroll-mt-24 py-16", className)}
			{...props}
		>
			<Container>{children}</Container>
		</section>
	);
}
