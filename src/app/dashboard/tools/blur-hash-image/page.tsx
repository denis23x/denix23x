import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainBlurHashImage } from "@/app/store/useNavMain";
import ImageInput from "./components/image-input";
import ImageBlurHashPreview from "./components/image-blur-hash-preview";
import ImageTextarea from "./components/image-textarea";
import ImageOptimization from "./components/image-optimization";
import ImageBlurHash from "./components/image-blur-hash";

export const metadata: Metadata = {
	title: navMainBlurHashImage.title,
	description: navMainBlurHashImage.description,
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>BlurHash Image</h1>
			<p className={"leading-7"}>
				This tool lets you generate BlurHash images from your own images directly in the browser. Ideal for developers
				and designers needing quick, efficient placeholders, it offers a fast and easy way to create and preview
				BlurHash codes for smooth loading effects.
			</p>
			<Separator />
			<div className={"flex items-start flex-wrap gap-4"}>
				<ImageBlurHashPreview />
				<div className={"grid gap-4 flex-1"}>
					<ImageInput />
					<ImageBlurHash />
					<ImageOptimization />
				</div>
			</div>
			<ImageTextarea />
		</div>
	);
}
