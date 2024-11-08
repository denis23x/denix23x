import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	images: {
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

const withMDX = createMDX({
	// Add Markdown plugins here, as desired
});

export default withMDX(nextConfig);
