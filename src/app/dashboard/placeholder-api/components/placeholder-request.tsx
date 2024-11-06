import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppHighlight } from "@/components/app-highlight";
import Link from "next/link";

interface PlaceholderRequestProps {
	type: string;
	path: string;
	response: string;
	model: string;
}

export default function PlaceholderRequest({ type, path, response, model }: PlaceholderRequestProps) {
	const map: Record<string, Record<string, string>> = {
		GET: {
			bg: "bg-[#61affe] dark:bg-[#61affe]/50",
			border: "border border-[#61affe] dark:border-[#61affe]/50",
		},
		POST: {
			bg: "bg-[#49cc90] dark:bg-[#49cc90]/50",
			border: "border border-[#49cc90] dark:border-[#49cc90]/50",
		},
	};

	return (
		<Collapsible
			className={`w-full rounded-md group/collapsible ${map[type].border} ${map[type].bg} bg-opacity-10`}
			defaultOpen={true}
		>
			<CollapsibleTrigger className={"w-full p-1"}>
				<div className={"flex items-center justify-between w-full gap-2"}>
					<small className={`font-bold uppercase text-foreground rounded py-1 w-16 ${map[type].bg}`}>{type}</small>
					<span className={"font-mono font-bold text-foreground text-left flex-1 truncate"}>{path}</span>
					<ChevronDown className={"group-data-[state=open]/collapsible:rotate-180"} />
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent>
				<div className={"grid gap-3"}>
					{/* prettier-ignore */}
					<div className={`flex justify-between w-full bg-background ${map[type].border} border-b-input border-x-0 gap-4 py-2 px-2 sm:px-4`}>
						<small className={"leading-7 font-bold my-auto"}>Parameters</small>
						<Link href={path} target={"_blank"}>
							<Button variant={"outline"} aria-label={"Try it out"}>Try it out</Button>
						</Link>
					</div>
					<div className={"grid"}>
						<div className={"grid grid-cols-12 gap-3 border-b border-input py-2 px-2 sm:px-4"}>
							<small className={"font-bold text-foreground col-span-3 lg:col-span-2 xl:col-span-1"}>Name</small>
							<small className={"font-bold text-foreground col-span-9 lg:col-span-10 xl:col-span-11"}>
								Description
							</small>
						</div>
						<div className={"grid grid-cols-12 gap-3 py-2 px-2 sm:px-4"}>
							<div className={"flex flex-col col-span-3 lg:col-span-2 xl:col-span-1"}>
								<span className={"font-bold leading-7 text-foreground truncate"}>search</span>
								<small className={"font-sx font-bold text-foreground truncate"}>string</small>
								<small className={"font-sx font-bold text-muted-foreground truncate"}>(query)</small>
							</div>
							<div className={"grid w-full max-w-sm items-center gap-1.5 col-span-9 lg:col-span-10 xl:col-span-11"}>
								<Label className={"leading-7 font-normal text-foreground"} htmlFor="input">
									Search by title and author
								</Label>
								<Input className={"bg-background"} type="text" id="input" placeholder="search" />
							</div>
						</div>
					</div>
					<div className={"flex justify-between w-full bg-background border-y border-input gap-4 py-2 px-2 sm:px-4"}>
						<small className={"leading-7 font-bold my-auto"}>Responses</small>
						<div className={"flex items-center gap-4"}>
							<small className={"hidden sm:block font-bold text-foreground whitespace-nowrap"}>
								Response content type
							</small>
							<Select>
								<SelectTrigger className="w-[160px]">
									<SelectValue placeholder="application/json" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="application/json">application/json</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className={"grid"}>
						<div className={"grid grid-cols-12 border-b border-input py-2 px-2 sm:px-4"}>
							<small className={"font-bold text-foreground col-span-3 lg:col-span-2 xl:col-span-1"}>Code</small>
							<small className={"font-bold text-foreground col-span-9 lg:col-span-10 xl:col-span-11"}>
								Description
							</small>
						</div>
						<div className={"grid grid-cols-12 py-2 px-2 sm:px-4"}>
							<span className={"leading-7 text-foreground col-span-3 lg:col-span-2 xl:col-span-1"}>200</span>
							<div className={"font-bold text-foreground col-span-9 lg:col-span-10 xl:col-span-11"}>
								<Tabs className={"overflow-auto"} defaultValue="response">
									<TabsList>
										<TabsTrigger value="response">Example Value</TabsTrigger>
										<TabsTrigger value="model">Model</TabsTrigger>
									</TabsList>
									<TabsContent value="response">
										<AppHighlight language={"json"} code={response}></AppHighlight>
									</TabsContent>
									<TabsContent value="model">
										<AppHighlight language={"typescript"} code={model}></AppHighlight>
									</TabsContent>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
