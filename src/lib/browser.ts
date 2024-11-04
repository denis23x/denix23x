import { toast } from "sonner";

export function handleCopy(text: string): void {
	navigator.clipboard
		.writeText(text)
		.then(() => toast.success("Copied to clipboard!"))
		.catch(() => toast.error("Failed to copy"));
}

export function handleShare(data: ShareData): void {
	navigator.share(data).catch(() => toast.error("Failed to share"));
}

export function handleDownload(url: string, filename: string): void {
	const HTMLElement: HTMLAnchorElement = document.createElement("a");

	HTMLElement.download = filename;
	HTMLElement.href = url;

	document.body.appendChild(HTMLElement);

	HTMLElement.click();

	document.body.removeChild(HTMLElement);
}
