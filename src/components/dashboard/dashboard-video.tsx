import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export default function DashboardVideo() {
	return (
		<div className="relative">
			<HeroVideoDialog
				className="dark:hidden block"
				animationStyle="from-center"
				videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Hq-q4lXUNDoOAhXS"
				thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
				thumbnailAlt="Hero Video"
			/>
			<HeroVideoDialog
				className="hidden dark:block"
				animationStyle="from-center"
				videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Hq-q4lXUNDoOAhXS"
				thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
				thumbnailAlt="Hero Video"
			/>
		</div>
	);
}
