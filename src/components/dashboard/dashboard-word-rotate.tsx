import WordRotate from "@/components/ui/word-rotate";

export default function DashboardWordRotate() {
	return (
		<div className="min-h-32 h-full w-full bg-transparent dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
			<span className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></span>
			<div className={"text-foreground max-w-4xl"}>
				<WordRotate
					className="text-4xl font-bold text-black dark:text-white"
					words={["Playlist", "Bookmarks", "Photos"]}
				/>
			</div>
		</div>
	);
}
