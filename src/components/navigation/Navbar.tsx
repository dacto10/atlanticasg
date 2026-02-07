import { getTranslations } from "next-intl/server";
import { SECTIONS, sectionHref } from "@/config/sections";
import { NavbarClient } from "./NavbarClient";

export async function Navbar() {
	const [nav, data] = await Promise.all([
		getTranslations("Nav"),
		getTranslations("Data"),
	]);

	const items = SECTIONS.map((s) => ({
		href: sectionHref(s.id),
		label: nav(s.navKey),
	}));

	return (
		<NavbarClient
			items={items}
			brand={data("brandFull")}
			cta={{ href: sectionHref("contact"), label: nav("quote") }}
		/>
	);
}
