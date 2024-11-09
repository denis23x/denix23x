"use client";

import { ArrowUpRight } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes, RefObject, useRef } from "react";
import Link from "next/link";

export default function MdxBlogA({
	children,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
	const preRef: RefObject<HTMLAnchorElement> = useRef<HTMLAnchorElement>(null);

	return (
		// @ts-ignore
		<Link className={"inline-flex items-center"} ref={preRef} {...props} target={"_blank"}>
			{children}
			<ArrowUpRight className={"block size-4"} />
		</Link>
	);
}
