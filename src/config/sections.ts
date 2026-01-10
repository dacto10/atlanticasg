export const SECTIONS = [
    { id: "products", navKey: "products" },
    { id: "industries", navKey: "industries" },
    { id: "coverage", navKey: "coverage" },
    { id: "suppliers", navKey: "suppliers" },
    { id: "allies", navKey: "allies" },
    { id: "testimonials", navKey: "testimonials" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export function sectionHref(id: SectionId | "contact") {
    return `/#${id}`;
}
