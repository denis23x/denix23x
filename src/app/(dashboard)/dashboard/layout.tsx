import type { Metadata } from "next";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { AppBreadcrumbs } from "@/components/app/app-breadcrumbs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
	title: {
		template: "%s | denis23x",
		default: "Dashboard",
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
							<Link href={"https://github.com/denis23x/denix23x"} target={"_blank"} rel={"noopener noreferrer"}>
								<Button variant={"ghost"} size={"icon"} className={"size-7"} aria-label={"Toggle Theme"}>
									<svg className={"fill-current"} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<title>GitHub</title>
										<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
									</svg>
								</Button>
							</Link>
							<ThemeToggle />
						</div>
					</header>
					<div className={"overflow-auto"}>{children}</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
