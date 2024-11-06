"use client";

import { Button } from "@/components/ui/button";
import { handleDownload as handleDownloadBrowser, handleShare } from "@/lib/browser";
import { useIsMobile } from "@/hooks/use-mobile";
import useStore from "@/app/dashboard/placeholder-image/store";

export default function PlaceholderDownload() {
	const { text, width, height, canvas } = useStore();

	const isMobile: boolean = useIsMobile();

	const handleDownload = () => {
		const name: string = `${text || `${width}x${height}`}.png`;

		if (canvas) {
			if (isMobile) {
				canvas.toBlob((blob: Blob | null) => {
					if (blob) {
						const shareFile: File = new File([blob], name, {
							type: blob.type,
						});

						const shareData: ShareData = {
							files: [shareFile],
						};

						handleShare(shareData);
					}
				});
			} else {
				handleDownloadBrowser(canvas.toDataURL(), name);
			}
		}
	};

	return (
		<Button variant={"outline"} onClick={handleDownload} aria-label={"Download Placeholder Image"}>
			Download Placeholder Image
		</Button>
	);
}
