import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/dashboard/tools/placeholder-api/swagger", "/dashboard/tools/placeholder-api/demo"],
		},
		sitemap: "https://denix23x.vercel.app/sitemap.xml",
	};
}
