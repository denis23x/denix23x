"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FileCode2, Clipboard, View } from "lucide-react";
import { AppDrawerDialog } from "@/components/app-drawer-dialog";
import { Textarea } from "@/components/ui/textarea";
import { handleCopy } from "@/lib/browser";

export default function Page() {
	const [svgInput, setSVGInput] = useState<string>("");
	const [cssOutput, setCSSOutput] = useState<string>("");

	const dataURLWrapper: Record<string, unknown> = {
		backgroundImage: cssOutput,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
	};

	useEffect(() => {
		setCSSOutput(svgToDataURL(svgInput));
	}, [svgInput]);

	const svgToDataURL = (svg: string): string => {
		return svg ? `url("data:image/svg+xml,${encodeURIComponent(svg).replace(/'/g, "%27").replace(/"/g, "%22")}")` : "";
	};

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>SVG to CSS Encoder</h1>
			<p className={"leading-7"}>
				This tool transforms <strong>SVG</strong> code into a <strong>Data URI format</strong>, creating an encoded{" "}
				<strong>URL</strong> that can be used directly as a{" "}
				<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
					background-image
				</code>{" "}
				in <strong>CSS</strong>. Essentially, it lets you embed <strong>SVG</strong> images directly within your
				stylesheets, eliminating the need to host separate image files and reducing server requests for faster loading
				times.
			</p>
			<fieldset className={"grid w-full gap-2"}>
				<Label className={"flex items-center gap-1"} htmlFor={"svg-input"}>
					<Button className={"size-7"} variant={"ghost"} size={"icon"}>
						<FileCode2 />
					</Button>
					<span className={"text-lg font-semibold"}>SVG Input</span>
				</Label>
				<Textarea
					rows={8}
					className={"bg-sidebar p-3"}
					id={"svg-input"}
					placeholder={"Paste your SVG code"}
					value={svgInput}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSVGInput(e.target.value)}
				/>
			</fieldset>
			<fieldset className={"grid w-full gap-2"}>
				<Label className={"flex items-center gap-1"} htmlFor={"css-output"}>
					<Button className={"size-7"} variant={"ghost"} size={"icon"}>
						<FileCode2 />
					</Button>
					<span className={"text-lg font-semibold"}>CSS Output</span>
				</Label>
				<div className={"relative"}>
					<Textarea
						className={"bg-sidebar p-3"}
						id={"css-output"}
						rows={8}
						placeholder={"URL wrapper"}
						value={cssOutput}
						readOnly={true}
					/>
					<AppDrawerDialog
						title={"CSS Output"}
						description={"Use the background-image in your CSS to apply the SVG"}
						trigger={
							<Button className={"absolute top-3 right-14 shadow-none"} size="icon" variant={"outline"}>
								<View />
							</Button>
						}
					>
						<div className={"size-full aspect-square"} style={dataURLWrapper}></div>
					</AppDrawerDialog>
					<Button
						className={"absolute top-3 right-3 shadow-none"}
						size="icon"
						variant={"outline"}
						onClick={() => handleCopy(cssOutput)}
					>
						<Clipboard />
					</Button>
				</div>
			</fieldset>
		</div>
	);
}
