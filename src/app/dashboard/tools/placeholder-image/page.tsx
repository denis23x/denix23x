import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainPlaceholderImage } from "@/store/useNavMain";
import PlaceholderImage from "./components/placeholder-image";
import PlaceholderText from "./components/placeholder-text";
import PlaceholderSizes from "./components/placeholder-sizes";
import PlaceholderColors from "./components/placeholder-colors";
import PlaceholderDownload from "./components/placeholder-download";

export const metadata: Metadata = {
	title: navMainPlaceholderImage.title,
	description: navMainPlaceholderImage.description,
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Placeholder Image</h1>
			<p className={"leading-7"}>
				This tool helps developers create customizable placeholder images for use in web and app development. By
				generating placeholder images with specific dimensions, colors, and text, it enables quick visualization and
				layout testing without relying on actual content.
			</p>
			<Separator />
			<div className={"flex flex-col lg:flex-row gap-4"}>
				<PlaceholderImage />
				<div className={"flex flex-1 flex-col gap-3"}>
					<PlaceholderText />
					<PlaceholderSizes />
					<PlaceholderColors />
				</div>
			</div>
			<PlaceholderDownload />
		</div>
	);
}
