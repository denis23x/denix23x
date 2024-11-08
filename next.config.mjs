import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { h } from "hastscript";

/** @type {import('rehype-pretty-code').Options} */
const options = {
	keepBackground: false,
	theme: {
		dark: "github-dark",
		light: "github-light",
	},
	transformers: [
		addCopyButton({
			toggle: 2000,
		})
	],
};

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [[rehypePrettyCode, options]],
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
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

export default withMDX(nextConfig);

function addCopyButton(options = {}) {
	const toggleMs = options.toggle || 3000

	return {
		name: 'shiki-transformer-copy-button',
		pre(node) {
			const button = h('button', {
				class: 'copy',
				"data-code": this.source,
				// onClick: `()=>{navigator.clipboard.writeText(this.dataset.code);this.classList.add('copied');setTimeout(() => this.classList.remove('copied'), ${toggleMs})}`
			}, [
				h('span', { class: 'ready' }),
				h('span', { class: 'success' })
			])

			node.children.push(button)
		}
	}
}
