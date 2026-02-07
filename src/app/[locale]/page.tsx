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
const Footer = dynamic(async () => (await import("@/components/navigation/Footer")).Footer)

export default async function HomePage({
	searchParams,
}: {
	searchParams: Promise<{ contact?: "success" | "invalid" | "error" }>;
}) {
	const { contact } = await searchParams;

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
				<ContactSection status={contact} />
			</main>
			<Footer />
		</>
	);
}
