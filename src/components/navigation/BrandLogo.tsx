import Image from "next/image";
import * as React from "react";

export function BrandLogo({
	name,
	className,
	width = 140,
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
				src="/brand/logo-primary.svg"
				alt=""
				aria-hidden="true"
				width={width}
				height={height}
				className="block dark:hidden"
				draggable={false}
			/>

			<Image
				src="/brand/logo-white.svg"
				alt=""
				aria-hidden="true"
				width={width}
				height={height}
				className="hidden dark:block"
				draggable={false}
			/>
		</span>
	);
}
