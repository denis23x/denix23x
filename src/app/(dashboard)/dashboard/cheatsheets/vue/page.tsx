import { Separator } from "@/components/ui/separator";
import type { Metadata } from "@/interfaces/metadata";
import CheatsheetsFaq from "@/components/dashboard/cheatsheets/cheatsheets-faq";

export const metadata: Metadata = {
	title: "Vue",
	description:
		"Vue.js is a flexible, progressive JavaScript framework for building dynamic, high-performance web applications with reactive data binding and component-based architecture.",
	other: {
		icon: (
			<svg
				className="fill-current"
				role="img"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Vue.js</title>
				<path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
			</svg>
		),
	},
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Vue</h1>
			<p className={"leading-7"}>
				Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications.
				Known for its simplicity and flexibility, Vue allows developers to easily integrate into projects of any size,
				offering reactive data binding and a component-based architecture. Whether you’re creating a complex app or
				enhancing a small feature, Vue provides an intuitive and efficient approach for building dynamic,
				high-performance web applications.
			</p>
			<Separator />
			<CheatsheetsFaq name={"vue"}></CheatsheetsFaq>
		</div>
	);
}
