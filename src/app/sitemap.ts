import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://denix23x.vercel.app/",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
	];
}
