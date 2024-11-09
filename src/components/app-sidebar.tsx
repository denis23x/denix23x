"use client";

import { House, Frame, LifeBuoy, Map, PieChart } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navMain } from "@/store/useNavMain";

export const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain,
	navSecondary: [
		{
			title: "shadcn/ui",
			url: "https://ui.shadcn.com/docs/components/accordion",
			icon: LifeBuoy,
		},
		{
			title: "Lucide Icons",
			url: "https://lucide.dev/",
			icon: LifeBuoy,
		},
		{
			title: "TailwindCSS",
			url: "https://tailwindcss.com/docs/installation",
			icon: LifeBuoy,
		},
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: Frame,
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: PieChart,
		},
		{
			name: "Travel",
			url: "#",
			icon: Map,
		},
	],
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
									<span className={"truncate font-semibold"}>Acme Inc</span>
									<span className={"truncate text-xs"}>Enterprise</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
				<NavSecondary items={data.navSecondary} className={"mt-auto"} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
