"use client";

import Giscus from "@giscus/react";

export default function BlogFooter() {
	return (
		<Giscus
			id="comments"
			repo="denis23x/denix23x-giscus"
			repoId="R_kgDONUqnBw"
			category="General"
			categoryId="DIC_kwDONUqnB84CkmDx"
			mapping="pathname"
			strict="1"
			reactionsEnabled="0"
			emitMetadata="0"
			inputPosition="bottom"
			theme="light"
			lang="en"
			loading="lazy"
		/>
	);
}
