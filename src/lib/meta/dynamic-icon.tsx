import { ImageResponse } from "next/og";

export const contentType: string = "image/png";
export const size = {
	width: 32,
	height: 32,
};

export default function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 24,
					background: "transparent",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				🤖
			</div>
		),
		{
			...size,
		}
	);
}