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
	return <div className={"overflow-auto"}>{children}</div>;
}
