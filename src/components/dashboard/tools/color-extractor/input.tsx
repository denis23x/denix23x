"use client";

import { ChangeEvent } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FileImage } from "lucide-react";
import { Input as Input1 } from "@/components/ui/input";
import useStore from "@/stores/color-extractor.store";

export default function Input() {
	const { setImage } = useStore();

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const file: File | null | undefined = e.target.files?.item(0);

		if (file) {
			const reader: FileReader = new FileReader();

			reader.onload = () => setImage(reader.result);
			reader.readAsDataURL(file);
		}
	};

	return (
		<fieldset className={"grid gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"image-input"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Image Input"}>
					<FileImage />
				</Button>
				<span className={"text-lg font-semibold"}>Image Input</span>
			</Label>
			<Input1
				className={"bg-sidebar pt-1.5"}
				type={"file"}
				id={"image-input"}
				accept={"image/png, image/jpeg, image/webp"}
				onInput={handleInput}
			/>
			<p className={"text-sm text-muted-foreground"}>
				Only <strong>.png</strong> or <strong>.jpeg</strong> or <strong>.webp</strong> is acceptable
			</p>
		</fieldset>
	);
}
