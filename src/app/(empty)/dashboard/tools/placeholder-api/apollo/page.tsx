import type { Metadata } from "@/interfaces/metadata";

export const metadata: Metadata = {
	title: "Placeholder API - Apollo",
	description:
		"Test and prototype GraphQL APIs effortlessly with this interactive tool. Explore queries, visualize responses, and debug seamlessly—no server setup needed.",
	alternates: {
		canonical: `${process.env.PUBLIC_URL!}/dashboard/tools/placeholder-api/apollo`,
	},
};

export default function Page() {
	return (
		<div className={"w-full h-screen"}>
			<iframe src={"/api/v1/placeholder"} title={"Embedded Website"} className={"w-full h-full border-none"} />
		</div>
	);
}
