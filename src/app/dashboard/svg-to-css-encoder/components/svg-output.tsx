"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FileCode2, View } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { AppDrawerDialog } from "@/components/app-drawer-dialog";
import { handleCopy } from "@/lib/browser";
import { useEffect } from "react";
import useStore from "@/app/dashboard/svg-to-css-encoder/store";

export default function SvgOutput() {
	const { input, output, setOutput } = useStore();

	useEffect(() => {
		setOutput(svgToDataURL(input));
	}, [input]);

	const svgToDataURL = (svg: string): string => {
		return svg ? `url("data:image/svg+xml,${encodeURIComponent(svg).replace(/'/g, "%27").replace(/"/g, "%22")}")` : "";
	};

	const svgPreview: Record<string, string> = {
		backgroundImage: output,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
	};

	return (
		<div className={"flex flex-col gap-4"}>
			<fieldset className={"grid w-full gap-2"}>
				<Label className={"flex items-center gap-1"} htmlFor={"css-output"}>
					<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"CSS Output"}>
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
						value={output}
						readOnly={true}
					/>
					<AppDrawerDialog
						title={"Preview"}
						description={"Use the background-image in your CSS to apply the SVG"}
						trigger={
							<Button
								className={"absolute top-3 right-3 shadow-none"}
								size="icon"
								variant={"outline"}
								aria-label={"Preview"}
							>
								<View />
							</Button>
						}
					>
						<div className={"size-full aspect-square"} style={svgPreview}></div>
					</AppDrawerDialog>
				</div>
			</fieldset>
			<Button variant={"outline"} onClick={() => handleCopy(output)} aria-label={"Copy CSS Output"}>
				Copy CSS Output
			</Button>
		</div>
	);
}
