import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: {
		template: "%s | denis23x",
		default: "Extended | denis23x",
	},
	description:
		"Frontend developer skilled in JavaScript, TypeScript, SCSS, and more. I create responsive, user-centered designs with an eye for detail, enhancing user experience and functionality.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return <div className={"overflow-auto"}>{children}</div>;
}
