"use client";

import Giscus from "@giscus/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function BlogFooter() {
	const { theme, systemTheme } = useTheme();
	const [giscusTheme, setGiscusTheme] = useState<string>();

	useEffect(() => {
		const isDark: boolean = theme === "dark" || (theme === "system" && systemTheme === "dark");

		setGiscusTheme(isDark ? "noborder_dark" : "noborder_light");
	}, [theme, systemTheme]);

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
			theme={giscusTheme}
			lang="en"
			loading="lazy"
		/>
	);
}
