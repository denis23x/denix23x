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
import { navMain } from "@/stores/useNavMain";

type AppBreadcrumbs = {
	title: string;
	url: string;
};

export function AppBreadcrumbs() {
	const pathname: string = usePathname();

	const appBreadcrumbs: AppBreadcrumbs[] = [
		{
			title: "Dashboard",
			url: "/dashboard",
		},
	];

	navMain.forEach(main => {
		if (pathname.startsWith(main.url)) {
			appBreadcrumbs.push(main);
		}

		if (main.items) {
			main.items.forEach(item => {
				if (pathname.startsWith(item.url)) {
					appBreadcrumbs.push(item);
				}
			});
		}
	});

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{appBreadcrumbs.map((breadcrumbs: AppBreadcrumbs, i: number) => (
					<ul
						className={`items-center gap-1.5 sm:gap-2.5 ${appBreadcrumbs.length - i > 2 ? "hidden sm:flex" : "flex"}`}
						key={i}
					>
						<BreadcrumbItem className={""}>
							{i !== appBreadcrumbs.length - 1 ? (
								<BreadcrumbLink href={breadcrumbs.url}>{breadcrumbs.title}</BreadcrumbLink>
							) : (
								<BreadcrumbPage>{breadcrumbs.title}</BreadcrumbPage>
							)}
						</BreadcrumbItem>
						{i !== appBreadcrumbs.length - 1 && <BreadcrumbSeparator />}
					</ul>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
