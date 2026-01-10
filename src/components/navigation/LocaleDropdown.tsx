"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { Check, Languages } from "lucide-react"
import { useEffect, useState } from "react"

type Locale = "en" | "es";

const LOCALES = [
	{ value: "en", label: "English", flagClass: "fi fi-us" },
	{ value: "es", label: "Español", flagClass: "fi fi-es" }
] as const;

export function LocaleDropdown() {
	const locale = useLocale() as Locale;
	const pathname = usePathname();
	const router = useRouter();

	const [mounted, setMounted] = useState(false);
	// eslint-disable-next-line react-hooks/set-state-in-effect
	useEffect(() => setMounted(true), []);

	const current = LOCALES.find((l) => l.value === locale) ?? LOCALES[0]

	function changeLocale(next: Locale) {
		const hash = typeof window !== "undefined" ? window.location.hash : ""
		router.replace(`${pathname}${hash}`, { locale: next })
	}

	if (!mounted) {
		return (
			<Button variant="outline" size="icon" aria-label="Change language" disabled>
				<Languages className="h-4 w-4" />
			</Button>
		)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" aria-label="Change language" className="cursor-pointer">
					<span aria-hidden className={`${current.flagClass} rounded-sm`} />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				{LOCALES.map((l) => (
					<DropdownMenuItem
						key={l.value}
						onClick={() => changeLocale(l.value)}
						className="flex items-center gap-2"
					>
						<span aria-hidden className={`${l.flagClass} rounded-sm`} />
						<span>{l.label}</span>
						{l.value === locale ? <Check className="ml-auto h-4 w-4" /> : null}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
