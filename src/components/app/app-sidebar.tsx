"use client";

import { House, AppWindow } from "lucide-react";
import { NavMain } from "@/components/nav/nav-main";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navMainStore } from "@/stores/nav-main.store";
import { NavSecondary } from "@/components/nav/nav-secondary";

export const data = {
	// user: {
	// 	name: "??",
	// 	email: "denix23x@gmail.com",
	// 	avatar: "/avatars/shadcn.jpg",
	// },
	navMain: navMainStore,
	navSecondary: [
		{
			title: "Takabase",
			url: "https://takabase.com",
			icon: AppWindow,
		},
		{
			title: "Memorease",
			url: "https://memorease.site",
			icon: AppWindow,
		},
		{
			title: "Daylik",
			url: "https://daylik-kw.web.app",
			icon: AppWindow,
		},
	],
	// projects: [
	// 	{
	// 		name: "Design Engineering",
	// 		url: "#",
	// 		icon: Frame,
	// 	},
	// 	{
	// 		name: "Sales & Marketing",
	// 		url: "#",
	// 		icon: PieChart,
	// 	},
	// ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant={"inset"} {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size={"lg"} asChild>
							<a href={"/dashboard"}>
								<div
									className={"flex aspect-square size-8 rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"}
								>
									<House className={"m-auto size-4"} />
								</div>
								<div className={"grid flex-1 text-left text-sm leading-tight"}>
									<span className={"truncate font-semibold"}>denis23x</span>
									<span className={"truncate text-xs"}>My Website</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				{/*<NavProjects projects={data.projects} />*/}
				<NavSecondary items={data.navSecondary} className={"mt-auto"} />
			</SidebarContent>
			{/*<SidebarFooter>*/}
			{/*	<NavUser user={data.user} />*/}
			{/*</SidebarFooter>*/}
		</Sidebar>
	);
}
