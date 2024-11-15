"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PaintBucket } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HexColorPicker } from "react-colorful";
import useStore from "@/stores/usePlaceholderImageStore";

export default function Colors() {
	const { color, setColor, background, setBackground } = useStore();

	return (
		<div className={"grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2"}>
			<fieldset className={"grid col-span-1 gap-2"}>
				<Label className={"flex items-center gap-1"} htmlFor={"background-input"}>
					<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Background"}>
						<PaintBucket />
					</Button>
					<span className={"text-lg font-semibold"}>Background</span>
				</Label>
				<div className={"flex gap-2"}>
					<Input
						className={"bg-sidebar flex-1"}
						type={"text"}
						id={"background-input"}
						placeholder={"Background"}
						value={background}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setBackground(e.target.toString())}
					/>
					<Popover>
						<PopoverTrigger asChild>
							<Button size={"icon"} variant={"outline"} style={{ background }} aria-label={"Background"}></Button>
						</PopoverTrigger>
						<PopoverContent className={"w-auto"}>
							<HexColorPicker color={background} onChange={setBackground} />
						</PopoverContent>
					</Popover>
				</div>
			</fieldset>
			<fieldset className={"grid col-span-1 gap-2"}>
				<Label className={"flex items-center gap-1"} htmlFor={"color-input"}>
					<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Color"}>
						<PaintBucket />
					</Button>
					<span className={"text-lg font-semibold"}>Color</span>
				</Label>
				<div className={"flex gap-2"}>
					<Input
						className={"bg-sidebar flex-1"}
						type={"text"}
						id={"color-input"}
						placeholder={"Color"}
						value={color}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setColor(e.target.toString())}
					/>
					<Popover>
						<PopoverTrigger asChild>
							<Button size={"icon"} variant={"outline"} style={{ background: color }} aria-label={"Color"}></Button>
						</PopoverTrigger>
						<PopoverContent className={"w-auto"}>
							<HexColorPicker color={color} onChange={setColor} />
						</PopoverContent>
					</Popover>
				</div>
			</fieldset>
		</div>
	);
}
