"use client";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function AppBreadcrumbs() {
	const pathname: string = usePathname();
	const pathSegments: string[] = pathname.split("/").filter(Boolean);

	const getValue = (i: number) => {
		return "/" + pathSegments.slice(0, i + 1).join("/");
	};

	const getLabel = (segment: string) => {
		const parts: string[] = segment.split("-").map(p => {
			// Abbreviations

			if (["css", "svg", "api"].includes(p)) {
				return p.toUpperCase();
			}

			// Exceptions

			if (p === "thumbhash") {
				return "ThumbHash";
			}

			if (p === "blurhash") {
				return "BlurHash";
			}

			// Skip prepositions

			if (p.length > 2) {
				return p.charAt(0).toUpperCase() + p.slice(1);
			}

			return p;
		});

		return parts.join(" ");
	};

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{pathSegments.map((segment: string, i: number) => (
					<ul
						className={`items-center gap-1.5 sm:gap-2.5 ${pathSegments.length - i > 2 ? "hidden sm:flex" : "flex"}`}
						key={i}
					>
						<BreadcrumbItem>
							{i !== pathSegments.length - 1 ? (
								<BreadcrumbLink href={getValue(i)}>{getLabel(segment)}</BreadcrumbLink>
							) : (
								<BreadcrumbPage>{getLabel(segment)}</BreadcrumbPage>
							)}
						</BreadcrumbItem>
						{i !== pathSegments.length - 1 && <BreadcrumbSeparator />}
					</ul>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
