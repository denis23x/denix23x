import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainPlaceholderImage } from "@/stores/useNavMain";
import Image from "@/components/placeholder-image/image";
import Text from "@/components/placeholder-image/text";
import Sizes from "@/components/placeholder-image/sizes";
import Colors from "@/components/placeholder-image/colors";
import Download from "@/components/placeholder-image/download";

export const metadata: Metadata = {
	title: navMainPlaceholderImage.title,
	description: navMainPlaceholderImage.description,
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Placeholder Image</h1>
			<p className={"leading-7"}>
				This tool helps developers create customizable placeholder images for use in web and app development. By
				generating placeholder images with specific dimensions, colors, and text, it enables quick visualization and
				layout testing without relying on actual content.
			</p>
			<Separator />
			<div className={"flex flex-col lg:flex-row gap-4"}>
				<Image /> {/* eslint-disable-line jsx-a11y/alt-text */}
				<div className={"flex flex-1 flex-col gap-3"}>
					<Text />
					<Sizes />
					<Colors />
				</div>
			</div>
			<Download />
		</div>
	);
}
