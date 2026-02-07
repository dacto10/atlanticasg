export function GlobalBackground() {
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
		>
			<div className="absolute inset-0 bg-tech-grid" />

			<div className="absolute inset-0 bg-grain opacity-[0.10] dark:opacity-[0.14]" />
		
			<div className="absolute inset-0 bg-tech-sweep" />
		</div>
	)
}
