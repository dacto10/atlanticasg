import dynamic from "next/dynamic";

const Navbar = dynamic(async () => (await import("@/components/navigation/Navbar")).Navbar)
const HeroSection = dynamic(async () => (await import("@/components/sections/hero")).HeroSection)
const ProductsSection = dynamic(async () => (await import("@/components/sections/products")).ProductsSection)

export default function HomePage() {
	return (
		<>
			<Navbar />
			<main>
				<HeroSection />
				<ProductsSection />
			</main>
		</>
	);
}
