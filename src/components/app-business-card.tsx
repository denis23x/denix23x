import Image from "next/image";
import Link from "next/link";
import { AtSign, Linkedin, Send, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BorderBeam } from "@/components/ui/border-beam";

export function AppBusinessCard() {
	return (
		<div className="relative grid w-full lg:max-w-4xl mx-auto gap-10 overflow-hidden lg:rounded-3xl bg-background pt-10 pb-4 lg:pb-10 px-4 lg:px-10 lg:shadow">
			<div className={"flex flex-col lg:flex-row items-center justify-between gap-8"}>
				<div className={"flex flex-col lg:flex-row items-center gap-10"}>
					<Image
						className={"size-[128] aspect-square rounded-full bg-sidebar border border-foreground object-cover"}
						priority={true}
						width={128}
						height={128}
						src={"/home/avatar.png"}
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
							<Twitter className={"size-8"} />
						</Link>
					</li>
					<li>
						<Link href={"https://www.linkedin.com/in/denis-iakimenko/"} target={"_blank"} rel={"noopener noreferrer"}>
							<Linkedin className={"size-8"} />
						</Link>
					</li>
					<li>
						<Link href={"https://t.me/denis23x"} target={"_blank"} rel={"noopener noreferrer"}>
							<Send className={"size-8"} />
						</Link>
					</li>
					<li>
						<Link href={"mailto:denix23x@gmail.com"} target={"_blank"} rel={"noopener noreferrer"}>
							<AtSign className={"size-8"} />
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
