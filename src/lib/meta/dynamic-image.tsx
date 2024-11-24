import { ImageResponse } from "next/og";
import { colord, random } from "colord";
import { faker } from "@faker-js/faker/locale/en";
import data from "./emoji.json";

export const runtime: string = "edge";
export const alt: string = "denis23x";
export const contentType: string = "image/png";
export const size: Record<string, number> = {
	width: 1200,
	height: 630,
};

// https://vercel.com/guides/using-custom-font

async function loadGoogleFont(font: string, text: string) {
	const url: string = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
	const css: string = await (await fetch(url)).text();
	const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

	if (resource) {
		const response = await fetch(resource[1]);

		if (response.status == 200) {
			return await response.arrayBuffer();
		}
	}

	throw new Error("Failed to load font data");
}

export default async function Image() {
	const i = (): number => faker.number.int({ min: 1, max: data.length - 1 });

	const emoji: string = Array.from({ length: 5 }, () => data[i()]).join(" ");
	const color: string = random().toRgbString();
	const text: string = "denis23x.info";

	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 128,
					fontFamily: "monospace",
					background: color,
					color: colord(color).isLight() ? "black" : "white",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<span>{emoji}</span>
				<span>{text}</span>
			</div>
		),
		{
			...size,
			fonts: [
				{
					name: "Geist Mono",
					data: await loadGoogleFont("Geist Mono", text.replace(".", "")),
					style: "normal",
				},
			],
		}
	);
}
