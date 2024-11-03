import { toast } from "sonner";

export function handleCopy(text: string): void {
	navigator.clipboard
		.writeText(text)
		.then(() => toast.success("Text copied to clipboard!"))
		.catch(() => toast.error("Failed to copy text"));
}
