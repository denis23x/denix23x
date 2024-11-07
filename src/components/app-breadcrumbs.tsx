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
import { data as sidebar } from "@/components/app-sidebar";

interface AppBreadcrumbs {
	title: string;
	url: string;
}

export function AppBreadcrumbs() {
	const pathname: string = usePathname();

	const appBreadcrumbs: AppBreadcrumbs[] = [
		{
			title: "Dashboard",
			url: "/dashboard",
		},
	];

	sidebar.navMain.forEach(main => {
		if (pathname.startsWith(main.url)) {
			appBreadcrumbs.push(main);
		}

		main.items.forEach(item => {
			if (pathname.startsWith(item.url)) {
				appBreadcrumbs.push(item);
			}
		});
	});

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{appBreadcrumbs.map((breadcrumbs: AppBreadcrumbs, i: number) => (
					<ul className={"flex items-center gap-1.5 sm:gap-2.5"} key={i}>
						<BreadcrumbItem className={"hidden md:block"}>
							{i !== appBreadcrumbs.length - 1 ? (
								<BreadcrumbLink href={breadcrumbs.url}>{breadcrumbs.title}</BreadcrumbLink>
							) : (
								<BreadcrumbPage>{breadcrumbs.title}</BreadcrumbPage>
							)}
						</BreadcrumbItem>
						{i !== appBreadcrumbs.length - 1 && <BreadcrumbSeparator className="hidden md:block" />}
					</ul>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
