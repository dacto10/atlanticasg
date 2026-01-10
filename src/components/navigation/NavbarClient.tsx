"use client";

import { Link } from "@/i18n/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { LocaleDropdown } from "@/components/navigation/LocaleDropdown";

type NavItem = { href: string; label: string };
type Cta = { href: string; label: string };

export function NavbarClient({
	items,
	brand,
	cta
}: {
	items: NavItem[];
	brand: string;
	cta: Cta;
}) {
	return (
		<header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4">
				<Link
					href="/"
					className="flex items-center gap-2 font-semibold tracking-tight hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
				>
					{brand}
				</Link>

				{/* <Link
						href="/"
						className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
					>
						<BrandLogo name={brand} className="leading-none" />
					</Link> */}

				<nav className="hidden items-center gap-4 md:flex" aria-label="Primary">
					<ul className="flex items-center gap-1">
						{items.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 after:absolute after:inset-x-3 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>

					<div className="ml-1 flex items-center gap-2">
						<ThemeToggle />
						<LocaleDropdown />
					</div>

					<Button asChild className="ml-2 rounded-full px-5">
						<Link href={cta.href}>
							{cta.label}
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</nav>

				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<LocaleDropdown />

					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon" aria-label="Open menu">
								<Menu className="h-4 w-4" />
							</Button>
						</SheetTrigger>

						<SheetContent side="right" className="w-[320px] sm:w-[380px]">
							<SheetHeader>
								<SheetTitle className="text-left">{brand}</SheetTitle>
							</SheetHeader>

							<div className="mt-4">
								<SheetClose asChild>
									<Button asChild className="w-full rounded-full">
										<Link href={cta.href}>
											{cta.label}
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</SheetClose>
							</div>

							<Separator className="my-6" />

							<nav aria-label="Mobile">
								<ul className="grid gap-1">
									{items.map((item) => (
										<li key={item.href}>
											<SheetClose asChild>
												<Link
													href={item.href}
													className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
												>
													{item.label}
												</Link>
											</SheetClose>
										</li>
									))}
								</ul>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
