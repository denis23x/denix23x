import type { MetadataRoute } from "next";
import { BlogItems, DemosItems, MiscItems, ToolsItems } from "@/lib/items";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const host: string = "https://denis23x.info/";
	const sitemap: MetadataRoute.Sitemap = [
		{
			url: host,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
	];
	const items = [
		{
			url: "/blog",
			items: await BlogItems(),
		},
		{
			url: "/dashboard/demos",
			items: await DemosItems(),
		},
		{
			url: "/dashboard/misc",
			items: await MiscItems(),
		},
		{
			url: "/dashboard/tools",
			items: await ToolsItems(),
		},
	];

	Object.values(items).forEach(item => {
		sitemap.push({
			url: new URL(item.url, host).toString(),
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		});

		item.items.forEach(i => {
			sitemap.push({
				url: new URL(i.url, host).toString(),
				lastModified: new Date(),
				changeFrequency: "yearly",
				priority: 0.6,
			});
		});
	});

	return sitemap;
}
