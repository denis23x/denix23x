"use client";

import { ArrowUpRight } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes, RefObject, useRef } from "react";
import Link from "next/link";

export default function BlogA({
	children,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
	const preRef: RefObject<HTMLAnchorElement> = useRef<HTMLAnchorElement>(null);

	// @ts-expect-error href is not exist
	const target = props.href.startsWith("http") ? "_blank" : "_self";

	return (
		// @ts-expect-error href is required
		<Link className={"inline"} ref={preRef} {...props} target={target}>
			<span className={"inline-block text-ellipsis overflow-hidden align-bottom underline max-w-full"}>{children}</span>
			{target === "_blank" && <ArrowUpRight className={"inline-block align-baseline size-4"} />}
		</Link>
	);
}
