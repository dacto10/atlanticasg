"use client"

import { cn } from "@/lib/utils"
import { ReactNode, useEffect, useRef, useState } from "react"

type RevealProps = {
	children: ReactNode
	className?: string
	delayMs?: number
	once?: boolean
}

export function Reveal({ children, className, delayMs = 0, once = true }: RevealProps) {
	const ref = useRef<HTMLDivElement>(null)
	const [shown, setShown] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el) return

		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
		if (reduced) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setShown(true)
			return
		}

		if (!("IntersectionObserver" in window)) {
			setShown(true)
			return
		}

		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					requestAnimationFrame(() => setShown(true))
					if (once) obs.disconnect()
				}
			},
			{ threshold: 0.15 }
		)

		obs.observe(el)
		return () => obs.disconnect()
	}, [once])

	return (
		<div
			ref={ref}
			style={{ transitionDelay: `${delayMs}ms` }}
			className={cn(
				"motion-safe:opacity-0 motion-safe:translate-y-2",
				"motion-safe:transition motion-safe:duration-500 motion-safe:ease-out",
				shown && "motion-safe:opacity-100 motion-safe:translate-y-0",
				"motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none",
				className
			)}
		>
			{children}
		</div>
	)
}
