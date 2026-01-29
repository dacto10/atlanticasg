import dynamic from "next/dynamic";

const Navbar = dynamic(async () => (await import("@/components/navigation/Navbar")).Navbar)
const HeroSection = dynamic(async () => (await import("@/components/sections/hero")).HeroSection)
const ProductsSection = dynamic(async () => (await import("@/components/sections/products")).ProductsSection)
const IndustriesSection = dynamic(async () => (await import("@/components/sections/industries")).IndustriesSection)
const CoverageSection = dynamic(async () => (await import("@/components/sections/coverage")).CoverageSection)
const ProvidersSection = dynamic(async () => (await import("@/components/sections/providers")).ProvidersSection)
const AlliesSection = dynamic(async () => (await import("@/components/sections/allies")).AlliesSection)
const TestimonialsSection = dynamic(async () => (await import("@/components/sections/testimonials")).TestimonialsSection)
const ContactSection = dynamic(async () => (await import("@/components/sections/contact")).ContactSection)

export default function HomePage({
	searchParams,
}: {
	searchParams: { contact?: "success" | "invalid" | "error" };
}) {
	return (
		<>
			<Navbar />
			<main>
				<HeroSection />
				<ProductsSection />
				<IndustriesSection />
				<CoverageSection />
				<ProvidersSection />
				<AlliesSection />
				<TestimonialsSection />
				<ContactSection status={searchParams.contact} />
			</main>
		</>
	);
}
