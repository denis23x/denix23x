"use client";

import SwaggerUI from "swagger-ui-react";
import openapi from "~/dashboard/tools/placeholder-api/swagger/denis23x.openapi.json";
import "swagger-ui-react/swagger-ui.css";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Swagger() {
	const { theme, systemTheme } = useTheme();

	useEffect(() => {
		const isDark: boolean = theme === "dark" || (theme === "system" && systemTheme === "dark");
		const linkId: string = "swagger-ui-dark";
		const linkAdd = () => {
			if (!document.getElementById(linkId)) {
				const link: HTMLLinkElement = document.createElement("link");

				link.id = linkId;
				link.rel = "stylesheet";
				link.href = "/dashboard/tools/placeholder-api/swagger/dark.css";

				document.head.appendChild(link);
			}
		};
		const linkRemove = () => {
			const existingLink: HTMLElement | null = document.getElementById(linkId);

			if (existingLink) {
				document.head.removeChild(existingLink);
			}
		};

		if (isDark) {
			linkAdd();
		} else {
			linkRemove();
		}

		return () => linkRemove();
	}, [theme]);

	return <SwaggerUI spec={openapi} />;
}
