import React, { useRef, useEffect } from "react";

interface PlaceholderImageProps {
	width: number;
	height: number;
	bgColor: string;
	textColor: string;
	text: string;
	blob: (data: Blob | null) => void;
	dataURL: (data: string) => void;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
	width,
	height,
	bgColor,
	textColor,
	text,
	blob,
	dataURL,
}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const img = imgRef.current;

		if (canvas && img) {
			const ctx = canvas.getContext("2d");

			if (ctx) {
				// Set canvas dimensions
				canvas.width = width;
				canvas.height = height;

				// Fill background color
				ctx.fillStyle = bgColor;
				ctx.fillRect(0, 0, width, height);

				// Set text properties and add text
				ctx.fillStyle = textColor;
				ctx.font = `${Math.min(width, height) / 5}px Arial`;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(text, width / 2, height / 2);

				// Convert canvas to data URL and set it as the image source
				img.src = canvas.toDataURL("image/png");
			}

			// Emit
			canvas.toBlob((b: Blob | null) => blob(b));
			dataURL(canvas.toDataURL("image/png"));
		}
	}, [width, height, bgColor, textColor, text, dataURL, blob]);

	return (
		<div>
			<canvas ref={canvasRef} style={{ display: "none" }} />
			<img ref={imgRef} alt="Generated Placeholder" width={width} height={height} />
		</div>
	);
};

export default PlaceholderImage;
