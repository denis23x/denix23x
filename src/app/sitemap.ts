import type { MetadataRoute } from "next";
import { navMainStore } from "@/stores/nav-main.store";

export default function sitemap(): MetadataRoute.Sitemap {
	const host: string = "https://denis23x.info/";
	const sitemap: MetadataRoute.Sitemap = [
		{
			url: host,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
	];

	navMainStore.forEach(main => {
		sitemap.push({
			url: new URL(main.url, host).toString(),
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		});

		if (main.items) {
			main.items.forEach(item => {
				sitemap.push({
					url: new URL(item.url, host).toString(),
					lastModified: new Date(),
					changeFrequency: "monthly",
					priority: 0.8,
				});
			});
		}
	});

	return sitemap;
}
