import type { Metadata } from "@/interfaces/metadata";
import Swagger from "@/components/dashboard/tools/placeholder-api/swagger";

export const metadata: Metadata = {
	title: "Placeholder API - Swagger",
	description:
		"Explore the Placeholder API Swagger page: A comprehensive mock API documentation for testing, prototyping, and showcasing demo. Perfect for developers!",
	alternates: {
		canonical: `https://denis23x.info/dashboard/tools/placeholder-api/swagger`,
	},
};

export default function Page() {
	return <Swagger />;
}
