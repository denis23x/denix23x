import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Placeholder API - Apollo",
	description:
		"Test and prototype GraphQL APIs effortlessly with this interactive tool. Explore queries, visualize responses, and debug seamlessly—no server setup needed.",
};

export default function Page() {
	return (
		<div className={"w-full h-screen"}>
			<iframe src={"/api/v1/placeholder"} title={"Embedded Website"} className={"w-full h-full border-none"} />
		</div>
	);
}
