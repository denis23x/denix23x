import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CircleAlert, Image } from "lucide-react";
import Link from "next/link";
import BlurHashPreview from "@/components/dashboard/tools/blur-hash-image/blur-hash-preview";
import Input from "@/components/dashboard/tools/blur-hash-image/input";
import BlurHash from "@/components/dashboard/tools/blur-hash-image/blur-hash";
import Optimization from "@/components/dashboard/tools/blur-hash-image/optimization";
import Textarea from "@/components/dashboard/tools/blur-hash-image/textarea";
import type { Metadata } from "@/interfaces/metadata";

export const metadata: Metadata = {
	title: "BlurHash Image",
	description:
		"Generate BlurHash images directly from your browser with this tool. Perfect for developers and designers needing fast, efficient placeholders for smooth loading effects.",
	other: {
		icon: <Image />, // eslint-disable-line jsx-a11y/alt-text
	},
	alternates: {
		canonical: `${process.env.PUBLIC_URL!}/dashboard/tools/blurhash-image`,
	},
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
						<Link className={"underline"} href={"/dashboard/tools/thumbhash-image"}>
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
