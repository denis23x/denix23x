import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { BorderBeam } from "@/components/ui/border-beam";

export function HomeBusinessCard() {
	return (
		<div className="relative grid w-full lg:max-w-4xl mx-auto gap-10 overflow-hidden lg:rounded-3xl bg-background pt-10 pb-4 lg:pb-10 px-4 lg:px-10 lg:shadow">
			<div className={"flex flex-col lg:flex-row items-center justify-between gap-8"}>
				<div className={"flex flex-col lg:flex-row items-center gap-10"}>
					<Image
						className={"size-[128px] aspect-square rounded-full bg-sidebar border border-foreground object-cover"}
						priority={true}
						width={256}
						height={305}
						src={"/home/business-card/avatar.webp"}
						alt={"Denis Iakimenko"}
					></Image>
					<p className={"grid text-center lg:text-left gap-4"}>
						<span className={"text-3xl lg:text-5xl font-semibold leading-none dark:from-white dark:to-slate-900/10"}>
							Denis
						</span>
						<span className={"text-3xl lg:text-5xl font-semibold leading-none dark:from-white dark:to-slate-900/10"}>
							Iakimenko
						</span>
					</p>
				</div>
				<ul className={"grid grid-cols-4 lg:grid-cols-2 gap-8"}>
					<li>
						<Link href={"https://x.com/"} target={"_blank"} rel={"noopener noreferrer"}>
							<svg
								className={"size-8 text-foreground"}
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
							</svg>
						</Link>
					</li>
					<li>
						<Link href={"https://www.linkedin.com/in/denis-iakimenko/"} target={"_blank"} rel={"noopener noreferrer"}>
							<svg
								className={"size-8 text-foreground hover:text-[#0A66C2]"}
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</Link>
					</li>
					<li>
						<Link href={"https://t.me/denis23x"} target={"_blank"} rel={"noopener noreferrer"}>
							<svg
								className={"size-8 text-foreground hover:text-[#26A5E4]"}
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
							</svg>
						</Link>
					</li>
					<li>
						<Link href={"mailto:denix23x@gmail.com"} rel={"noopener noreferrer"}>
							<svg
								className={"size-8 text-foreground hover:text-[#EA4335]"}
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
							</svg>
						</Link>
					</li>
				</ul>
			</div>
			<Separator />
			<span className="pointer-events-none whitespace-pre-wrap text-4xl md:text-5xl lg:text-6xl font-semibold leading-none text-center mx-auto dark:from-white dark:to-slate-900/10">
				Software Developer
			</span>
			<p className={"leading-7"}>
				I&#39;m a passionate frontend developer with a focus on creating clean, responsive, and user-centered designs.
				Skilled in <strong className={"inline-code"}>JavaScript</strong>,
				<strong className={"inline-code"}>TypeScript</strong>, <strong className={"inline-code"}>SCSS</strong>, and
				other frontend technologies, I enjoy building engaging, intuitive interfaces that enhance the user experience.
				Along with strong technical skills, I have an eye for design and detail, making sure each project aligns with
				best practices in both functionality and aesthetics.
			</p>
			<BorderBeam className={"hidden lg:block"} size={192} duration={12} delay={8} />
		</div>
	);
}
