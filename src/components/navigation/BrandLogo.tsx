import Image from "next/image";

export function BrandLogo({
	name,
	className,
	width = 105,
	height = 28
}: {
	name: string;
	className?: string;
	width?: number;
	height?: number;
}) {
	return (
		<span className={className}>
			<span className="sr-only">{name}</span>

			<Image
				src="/asg-secondary.svg"
				alt="Atlantica Supplies Group"
				aria-hidden="true"
				width={width}
				height={height}
				className="block dark:hidden"
				draggable={false}
			/>

			<Image
				src="/asg-secondary-white.svg"
				alt="Atlantica Supplies Group"
				aria-hidden="true"
				width={width}
				height={height}
				className="hidden dark:block"
				draggable={false}
			/>
			</span>
	);
}
