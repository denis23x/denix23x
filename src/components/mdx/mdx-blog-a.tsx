"use client";

import { ArrowUpRight } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes, RefObject, useRef } from "react";
import Link from "next/link";

export default function MdxBlogA({
	children,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
	const preRef: RefObject<HTMLAnchorElement> = useRef<HTMLAnchorElement>(null);

	// @ts-expect-error href is not exist
	const target = props.href.startsWith("http") ? "_blank" : "_self";

	return (
		// @ts-expect-error href is required
		<Link className={"inline-flex items-center"} ref={preRef} {...props} target={target}>
			{children}
			<ArrowUpRight className={"block size-4"} />
		</Link>
	);
}
