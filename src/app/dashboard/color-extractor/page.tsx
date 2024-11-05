import { Separator } from "@/components/ui/separator";
import ImagePreview from "@/app/dashboard/color-extractor/components/image-preview";
import ImageInput from "@/app/dashboard/color-extractor/components/image-input";
import ImagePalette from "@/app/dashboard/color-extractor/components/image-palette";

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Color Extractor</h1>
			<p className={"leading-7"}>
				This tool creates a color palette from any image, including an average <strong>HUE</strong>, offering a fast way
				to apply the visual theme of an image to various <strong>UI</strong> components. It helps designers maintain
				visual consistency, enabling the creation of custom color schemes that align with the overall aesthetic of the
				image.
			</p>
			<Separator />
			<div className={"flex items-start flex-wrap gap-4"}>
				<ImagePreview></ImagePreview>
				<div className={"grid gap-4"}>
					<ImageInput></ImageInput>
					<ImagePalette></ImagePalette>
				</div>
			</div>
		</div>
	);
}
