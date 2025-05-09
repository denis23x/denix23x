import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: [
				// "/dashboard/tools/placeholder-api/swagger",
				// "/dashboard/tools/placeholder-api/apollo",
				// "/dashboard/tools/placeholder-api/demo",
				"/_next",
				"/*?",
			],
		},
		sitemap: "https://denis23x.info/sitemap.xml",
	};
}
