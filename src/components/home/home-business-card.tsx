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
				<ul className={"grid grid-cols-4 lg:grid-cols-3 gap-8"}>
					<li>
						<Link href={"https://github.com/denis23x"} target={"_blank"} rel={"noopener noreferrer"}>
							<svg
								className={"size-8 text-foreground"}
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
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
						<Link href={"mailto:damage.23x@gmail.com"} rel={"noopener noreferrer"}>
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
					<li>
						<Link href={"https://denis23x.itch.io/deepwood"} target={"_blank"} rel={"noopener noreferrer"}>
							<svg
								className={"size-8 text-foreground hover:text-[#FA5C5C]"}
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z" />
							</svg>
						</Link>
					</li>
					<li>
						<Link href={"https://x.com/denix23x"} target={"_blank"} rel={"noopener noreferrer"}>
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
				</ul>
			</div>
			<Separator />
			{/*
			<span className="pointer-events-none whitespace-pre-wrap text-4xl md:text-5xl lg:text-6xl font-semibold leading-none text-center mx-auto dark:from-white dark:to-slate-900/10">
				<SparklesText text="Web" /> Developer
			</span>
			*/}
			<p className={"leading-7"}>
				I&#39;m a passionate full stack developer with a focus on creating clean, responsive, and user-centered designs.
				Skilled in <strong className={"inline-code"}>JavaScript</strong>,
				<strong className={"inline-code"}>TypeScript</strong>, <strong className={"inline-code"}>SCSS</strong>, and
				other web technologies, I enjoy building engaging, intuitive interfaces that enhance the user experience. Along
				with strong technical skills, I have an eye for design and detail, making sure each project aligns with best
				practices in both functionality and aesthetics.
			</p>
			<BorderBeam className={"hidden lg:block"} size={192} duration={12} delay={8} />
		</div>
	);
}
