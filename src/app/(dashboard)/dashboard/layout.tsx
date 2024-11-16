import type { Metadata } from "next";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { AppBreadcrumbs } from "@/components/app/app-breadcrumbs";

export const metadata: Metadata = {
	title: {
		template: "%s | denis23x",
		default: "Dashboard | denis23x",
	},
	description:
		"Access organized groups of pages with this streamlined dashboard, offering quick links to tools, resources, and collections for efficient navigation in one place.",
};

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<SidebarProvider defaultOpen={false}>
			<AppSidebar />
			<SidebarInset>
				<div className={"grid"}>
					<header className="flex h-16 items-center justify-between gap-2">
						<div className="flex items-center gap-2 px-4">
							<SidebarTrigger className="-ml-1" />
							<Separator orientation="vertical" className="mr-2 h-4" />
							<AppBreadcrumbs />
						</div>
						<div className={"flex items-center gap-2 px-4"}>
							<ThemeToggle />
						</div>
					</header>
					<div className={"overflow-auto"}>{children}</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
