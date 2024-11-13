import { ChevronRight, type LucideIcon } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

type NavMainProps = {
	items: {
		title: string;
		url: string;
		icon: LucideIcon;
		isActive?: boolean;
		items?: {
			title: string;
			url: string;
		}[];
	}[];
};

export function NavMain({ items }: NavMainProps) {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Dashboard</SidebarGroupLabel>
			<SidebarMenu>
				{items.map(item => (
					<SidebarMenuItem key={item.title}>
						{item.items ? (
							<Collapsible defaultOpen={item.isActive} className={"group/collapsible"}>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton tooltip={item.title}>
										{item.icon && <item.icon />} {item.title}
										<ChevronRight
											className={"ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"}
										/>
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										{item.items?.map(subItem => (
											<SidebarMenuSubItem key={subItem.title}>
												<SidebarMenuSubButton asChild>
													{subItem.url.startsWith("http") ? (
														<Link href={subItem.url} target={"_blank"} rel={"noreferrer"}>
															{subItem.title}
														</Link>
													) : (
														<Link href={subItem.url}>{subItem.title}</Link>
													)}
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							</Collapsible>
						) : (
							<SidebarMenuSubButton asChild>
								{item.url.startsWith("http") ? (
									<Link href={item.url} target={"_blank"} rel={"noreferrer"}>
										{item.icon && <item.icon />}
										{item.title}
									</Link>
								) : (
									<Link href={item.url}>
										{item.icon && <item.icon />}
										{item.title}
									</Link>
								)}
							</SidebarMenuSubButton>
						)}
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
