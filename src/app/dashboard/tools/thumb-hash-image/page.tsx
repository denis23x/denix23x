"use client";

import { ChangeEvent, useState } from "react";
import { rgbaToThumbHash, thumbHashToRGBA } from "thumbhash";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function Page() {
	const [imageData, setImageData] = useState<string | null>(null);
	const [thumbHash, setThumbHash] = useState<Uint8Array | null>(null);

	// Function to handle image upload and convert to ThumbHash
	const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				const img = new Image();

				img.onload = () => {
					// Set maximum dimensions for the thumbnail
					const maxWidth = 16;
					const maxHeight = 16;
					const aspectRatio = img.width / img.height;
					const width = Math.max(1, Math.round(aspectRatio > 1 ? maxWidth : maxHeight * aspectRatio));
					const height = Math.max(1, Math.round(aspectRatio > 1 ? maxWidth / aspectRatio : maxHeight));

					// Ensure width and height are positive integers before proceeding
					if (width > 0 && height > 0) {
						const canvas = document.createElement("canvas");
						canvas.width = width;
						canvas.height = height;
						const ctx = canvas.getContext("2d");

						if (ctx) {
							ctx.drawImage(img, 0, 0, width, height);

							// Get the resized image data and convert to ThumbHash
							const imageData = ctx.getImageData(0, 0, width, height);
							const hash = rgbaToThumbHash(imageData.width, imageData.height, imageData.data);

							setImageData(reader.result as string); // Set the original image preview
							setThumbHash(hash); // Set the ThumbHash

							// setImageData(canvas.toDataURL("image/jpeg", 0.7)); // JPEG format with 70% quality
							// setThumbHash(hash); // Set ThumbHash value

							const x = canvas.toDataURL("image/jpeg", 0.7);

							if (x) {
								const yourBase64String = x.substring(x.indexOf(",") + 1);
								// const bits = yourBase64String.length * 6; // 567146
								// const bytes = bits / 8;
								// const kb = Math.ceil(bytes / 1000);
								// in one Line
								const kb = Math.ceil((yourBase64String.length * 6) / 8 / 1000);

								console.log(kb);
							}
						} else {
							console.error("Failed to get canvas rendering context");
						}
					} else {
						console.error("Invalid width or height for thumbnail:", width, height);
					}
				};
				img.src = reader.result as string;
			};
			reader.readAsDataURL(file);
		}
	};

	// Decode ThumbHash and render as a base64 image for preview
	const renderThumbHashImage = (): string | null => {
		if (!thumbHash) return null;

		const { w, h, rgba } = thumbHashToRGBA(thumbHash);
		const canvas = document.createElement("canvas");
		canvas.width = w;
		canvas.height = h;
		const ctx = canvas.getContext("2d");
		if (ctx) {
			const imgData = ctx.createImageData(w, h);
			imgData.data.set(rgba);
			ctx.putImageData(imgData, 0, 0);
		}

		return canvas.toDataURL();
	};

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>ThumbHash Image</h1>
			<p className={"leading-7"}>
				This tool allows you to create thumb hash variations of your images directly in the browser, offering a seamless
				way to generate blurred previews for improved loading visuals. Ideal for developers and designers looking to
				optimize user experience, it provides a fast, efficient method to create subtle image placeholders that enhance
				loading transitions on web and mobile applications.
			</p>
			<Separator />
			<h1>ThumbHash Image Generator</h1>
			<input type="file" accept="image/*" onChange={handleImageUpload} />
			{imageData && (
				<div>
					<h3>Original Image:</h3>
					<img src={imageData} alt="Original" style={{ width: "200px", height: "auto" }} />
				</div>
			)}
			{thumbHash && (
				<div>
					<h3>ThumbHash Preview:</h3>
					<img src={renderThumbHashImage() || ""} alt="ThumbHash Preview" style={{ width: "100px", height: "auto" }} />
					<Textarea rows={20} value={imageData || ""} readOnly={true}></Textarea>
					<Textarea rows={20} value={renderThumbHashImage() || ""} readOnly={true}></Textarea>
				</div>
			)}
		</div>
	);
}
