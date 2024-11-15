import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainBlurHashImage } from "@/stores/useNavMain";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
import Link from "next/link";
import Input from "@/components/tools/blur-hash-image/input";
import BlurHashPreview from "@/components/tools/blur-hash-image/blur-hash-preview";
import Textarea from "@/components/tools/blur-hash-image/textarea";
import Optimization from "@/components/tools/blur-hash-image/optimization";
import BlurHash from "@/components/tools/blur-hash-image/blur-hash";

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
			<Alert variant="destructive">
				<AlertDescription className={"flex flex-col sm:flex-row items-start gap-2"}>
					<CircleAlert className={"min-w-4 size-4 translate-y-0.5"} />
					<span className={"inline-block"}>
						<Link className={"underline"} href={"/dashboard/tools/thumb-hash-image"}>
							ThumbHash
						</Link>{" "}
						provides smaller, faster-loading previews with color accuracy, making it more efficient than BlurHash for
						high-performance image placeholders.
					</span>
				</AlertDescription>
			</Alert>
			<div className={"flex items-start flex-wrap gap-4"}>
				<BlurHashPreview />
				<div className={"grid gap-4 flex-1"}>
					<Input />
					<BlurHash />
					<Optimization />
				</div>
			</div>
			<Textarea />
		</div>
	);
}
