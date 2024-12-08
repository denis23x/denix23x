import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { shikiOptions } from "./src/configs/options/shikiOptions.mjs";

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm, remarkToc],
		rehypePlugins: [rehypeSlug, [rehypePrettyCode, shikiOptions]],
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/pusher/:path*',
				destination: 'https://sockjs-mt1.pusher.com/pusher/:path*',
				// 'https://sockjs-mt1.pusher.com/pusher/app/4033f77ec34c54548123/979/nj4o46e2/xhr_streaming?protocol=7&client=js&version=8.4.0-rc2&t=1733646027467&n=13'
				// 'https://denis23x.info/pusher/app/4033f77ec34c54548123/275/2ra8alj8/xhr?protocol=7&client=js&version=8.4.0-rc2&t=1733646716259&n=2'
			},
		];
	},
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	sassOptions: {
		silenceDeprecations: ["legacy-js-api"],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "api.microlink.io",
				port: "",
				pathname: "/**/**",
			},
			{
				protocol: "https",
				hostname: "picsum.photos",
				port: "",
				pathname: "/**/**",
			},
			{
				protocol: "https",
				hostname: "api.dicebear.com",
				port: "",
				pathname: "/**/**",
			},
			{
				protocol: "https",
				hostname: "startup-template-sage.vercel.app",
				port: "",
				pathname: "/**/**",
			},
		],
	},
};

export default withMDX(nextConfig);
