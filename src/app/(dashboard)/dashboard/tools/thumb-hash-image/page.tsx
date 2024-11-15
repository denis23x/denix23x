import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainThumbHashImage } from "@/stores/useNavMain";
import ThumbHashPreview from "@/components/tools/thumb-hash-image/thumb-hash-preview";
import Input from "@/components/tools/thumb-hash-image/input";
import Textarea from "@/components/tools/thumb-hash-image/textarea";
import ThumbHash from "@/components/tools/thumb-hash-image/thumb-hash";

export const metadata: Metadata = {
	title: navMainThumbHashImage.title,
	description: navMainThumbHashImage.description,
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>ThumbHash Image</h1>
			<p className={"leading-7"}>
				This tool allows you to create thumb hash variations of your images directly in the browser, offering a seamless
				way to generate blurred previews for improved loading visuals. Ideal for developers and designers looking to
				optimize user experience, it provides a fast, efficient method to create subtle image placeholders that enhance
				loading transitions on web and mobile applications.
			</p>
			<Separator />
			<div className={"flex items-start flex-wrap gap-4"}>
				<ThumbHashPreview />
				<div className={"grid gap-4 flex-1"}>
					<Input />
					<ThumbHash />
				</div>
			</div>
			<Textarea />
		</div>
	);
}
