import type { Metadata } from "next";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { AppBreadcrumbs } from "@/components/app-breadcrumbs";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<div className={"grid"}>
					<header className="flex h-16 shrink-0 items-center gap-2">
						<div className="flex items-center gap-2 px-4">
							<SidebarTrigger className="-ml-1" />
							<ThemeToggle />
							<Separator orientation="vertical" className="mr-2 h-4" />
							<AppBreadcrumbs />
						</div>
					</header>
					<div className={"overflow-auto"}>{children}</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
