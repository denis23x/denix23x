import type { Metadata } from "@/interfaces/metadata";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: {
		template: "%s | denis23x",
		default: "Detached Layout",
	},
	description:
		"Frontend developer skilled in JavaScript, TypeScript, SCSS, and more. I create responsive, user-centered designs with an eye for detail, enhancing user experience and functionality.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<div className={"grid gap-4 md:gap-12 w-full max-w-4xl mx-auto py-4 md:py-12 px-4 text-foreground"}>{children}</div>
	);
}
