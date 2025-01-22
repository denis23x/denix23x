import { Separator } from "@/components/ui/separator";
import type { Metadata } from "@/interfaces/metadata";
import CheatsheetsFaq from "@/components/dashboard/cheatsheets/cheatsheets-faq";

export const metadata: Metadata = {
	title: "Nuxt",
	description:
		"Nuxt.js is a Vue-based framework for building high-performance web apps with server-side rendering, static site generation, and seamless SEO optimization.",
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
				<title>Nuxt</title>
				<path d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z" />
			</svg>
		),
	},
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Nuxt</h1>
			<p className={"leading-7"}>
				Nuxt.js is a versatile framework built on Vue.js, designed for creating server-side rendered, static, and
				single-page applications. With its simple configuration, automatic routing, and powerful modules, Nuxt
				streamlines development while enhancing SEO and performance. Ideal for projects of any scale, Nuxt provides an
				efficient, intuitive approach to building modern web applications.
			</p>
			<Separator />
			<CheatsheetsFaq name={"nuxt"}></CheatsheetsFaq>
		</div>
	);
}
