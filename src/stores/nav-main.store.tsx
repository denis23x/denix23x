import { ScrollText, Shapes, SquareTerminal } from "lucide-react";

export const navMainBlurHashImage = {
	title: "BlurHash Image",
	url: "/dashboard/tools/blur-hash-image",
	description:
		"Generate BlurHash images directly from your browser with this tool. Perfect for developers and designers needing fast, efficient placeholders for smooth loading effects.",
};

export const navMainColorConverter = {
	title: "Color Converter",
	url: "/dashboard/tools/color-converter",
	description:
		"Easily convert color values across formats like HEX, RGB, and HSL. Switch between models with a click for flexible styling and precise color matching in projects.",
};

export const navMainColorExtractor = {
	title: "Color Extractor",
	url: "/dashboard/tools/color-extractor",
	description:
		"Create a color palette from any image, including average HUE, to match themes across UI components. Ideal for maintaining aesthetic and visual consistency in design.",
};

export const navMainLoremIpsum = {
	title: "Lorem Ipsum",
	url: "/dashboard/tools/lorem-ipsum",
	description:
		"Generate customizable Lorem Ipsum text for web design, enabling designers to fill layouts with realistic, non-distracting text that simulates real content for visual testing.",
};

export const navMainMarkdownRenderer = {
	title: "Markdown Renderer",
	url: "/dashboard/tools/markdown-renderer",
	description:
		"Render Markdown content in your browser and download the output. Perfect for developers and writers needing a quick way to preview formatted Markdown without switching apps.",
};

export const navMainPlaceholderApi = {
	title: "Placeholder API",
	url: "/dashboard/tools/placeholder-api",
	description:
		"Easily prototype and test database queries with Swagger or Apollo. Use mock data and predefined endpoints for fast front-end development—no live backend required!",
};

export const navMainPlaceholderImage = {
	title: "Placeholder Image",
	url: "/dashboard/tools/placeholder-image",
	description:
		"Generate customizable placeholder images with specific dimensions, colors, and text for quick visualization and layout testing in web and app development projects.",
};

export const navMainSvgToCssEncoder = {
	title: "SVG to CSS Encoder",
	url: "/dashboard/tools/svg-to-css-encoder",
	description:
		"Generate customizable placeholder images with specific dimensions, colors, and text for quick visualization and layout testing in web and app development projects.",
};

export const navMainThumbHashImage = {
	title: "ThumbHash Image",
	url: "/dashboard/tools/thumb-hash-image",
	description:
		"Generate thumb hash image previews in your browser for seamless, blurred placeholders. Perfect for developers optimizing loading visuals on web and mobile apps.",
};

// --

export const navMainBookmarks = {
	title: "Bookmarks",
	url: "/dashboard/misc/bookmarks",
	description:
		"Explore a curated collection of developer resources, including guides, coding tips, tools, and tutorials to boost productivity. Perfect for enhancing your dev toolkit.",
};

export const navMainPhotos = {
	title: "Photos",
	url: "/dashboard/misc/photos",
	description:
		"Explore a curated collection of travel photos capturing stunning landscapes, and vibrant cityscapes. Each image invites you to see the world anew.",
};

export const navMainPlaylist = {
	title: "Playlist",
	url: "/dashboard/misc/playlist",
	description:
		"Explore a curated selection of my favorite albums across genres and styles. Discover impactful tracks, unique sounds, and insights—perfect for expanding your playlist!",
};

// --

export const navMainBlogGitWorkflowWithHuskyAndConventionalCommits = {
	title: "Git workflow with Husky and Conventional Commits",
	url: "/dashboard/blog/git-workflow-with-husky-and-conventional-commits",
	description:
		"Learn how to improve code quality, automate tasks, and enhance collaboration in your Git projects using Husky and Conventional Commits",
};

export const navMainBlogHowToCreateDynamicSitemapForSEO = {
	title: "How to create a dynamic sitemap for SEO",
	url: "/dashboard/blog/how-to-create-dynamic-sitemap-for-seo",
	description:
		"Learn how to create a dynamic sitemap.xml in web applications using modern frameworks like Nest, Nuxt, or Express",
};

export const navMainBlogHowToMakeStorageUrlsSEOFriendly = {
	title: "How to make storage URLs SEO friendly",
	url: "/dashboard/blog/how-to-make-storage-urls-seo-friendly",
	description:
		"Making Firebase Storage images URLs SEO friendly with a proxy in Angular on Production and while local development",
};

export const navMainBlogHowToSummarizeTextInTypeScriptWithoutAI = {
	title: "How to summarize text in TypeScript without AI",
	url: "/dashboard/blog/how-to-summarize-text-in-typeScript-without-ai",
	description:
		"Discover how to efficiently summarize text in JavaScript using a simple, non-AI method. This approach provides accurate text condensation.",
};

export const navMainBlogHowToUseSvgSpriteIconsForDevelopment = {
	title: "How to use SVG Sprite Icons for development",
	url: "/dashboard/blog/how-to-use-svg-sprite-icons-for-development",
	description:
		"How to implement SVG sprite icons on Frontend project for optimized web performance. SVG sprites for reducing file requests, optimizing page load speed for modern web applications",
};

// --

export const navMainStore = [
	{
		isActive: true,
		title: "Tools",
		url: "/dashboard/tools",
		icon: SquareTerminal,
		items: [
			navMainBlurHashImage,
			navMainColorConverter,
			navMainColorExtractor,
			navMainLoremIpsum,
			navMainMarkdownRenderer,
			navMainPlaceholderApi,
			navMainPlaceholderImage,
			navMainSvgToCssEncoder,
			navMainThumbHashImage,
		],
	},
	{
		isActive: true,
		title: "Misc",
		url: "/dashboard/misc",
		icon: Shapes,
		items: [navMainBookmarks, navMainPhotos, navMainPlaylist],
	},
	{
		title: "Blog",
		url: "/dashboard/blog",
		icon: ScrollText,
		items: [
			navMainBlogGitWorkflowWithHuskyAndConventionalCommits,
			navMainBlogHowToCreateDynamicSitemapForSEO,
			navMainBlogHowToMakeStorageUrlsSEOFriendly,
			navMainBlogHowToSummarizeTextInTypeScriptWithoutAI,
			navMainBlogHowToUseSvgSpriteIconsForDevelopment,
		],
	},
];
