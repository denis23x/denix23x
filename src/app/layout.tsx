import type { Metadata } from "@/interfaces/metadata";
import localFont from "next/font/local";
import "@/app/styles/globals.scss";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ReactNode } from "react";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});
const fastSans = localFont({
	src: "./fonts/FastSans.ttf",
	variable: "--font-fast-sans",
	weight: "100 900",
});
const fastMono = localFont({
	src: "./fonts/FastMono.ttf",
	variable: "--font-fast-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://denis23x.info"),
	title: {
		template: "%s | denis23x",
		default: "My Website",
	},
	description:
		"Fullstack developer skilled in JavaScript, TypeScript, SCSS, and more. I create responsive, user-centered designs with an eye for detail, enhancing user experience and functionality.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${fastSans.variable} ${fastMono.variable} antialiased`}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<div className={"overflow-auto"}>{children}</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
