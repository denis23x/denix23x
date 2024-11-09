import { FlipWords } from "@/components/ui/flip-words";
import RetroGrid from "@/components/ui/retro-grid";

export function HomeRetro() {
	const words: string[] = ["better", "cute", "beautiful", "modern", "fast"];

	return (
		<div className="h-screen flex justify-center items-center">
			<div className="text-4xl mx-auto font-extralight text-neutral-600 dark:text-neutral-400 z-10">
				Build
				<FlipWords words={words} duration={1500} /> <br />
				websites with love ❤️
			</div>
			<RetroGrid />
		</div>
	);
}
