import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { shikiOptions } from "./src/options/shikiOptions.mjs";

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm, remarkToc],
		rehypePlugins: [rehypeSlug, [rehypePrettyCode, shikiOptions]],
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	sassOptions: {
		silenceDeprecations: ["legacy-js-api"],
	},
	images: {
		domains: [
			"api.microlink.io",
		],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
				port: "",
				pathname: "/**/**",
			},
		],
	},
};

export default withMDX(nextConfig);
