import { globby } from "globby";
import path from "path";

async function GetItems(pattern: string) {
	return globby(pattern).then((paths: string[]) => {
		return paths
			.map(p => path.dirname(p).split("/").pop() as string)
			.filter(p => !["demos", "misc", "tools", "cheatsheets"].includes(p))
			.sort((a, b) => a.localeCompare(b));
	});
}

export async function BlogItems() {
	const items: string[] = await GetItems("src/app/\\(empty\\)/blog/**/*.mdx");

	return Promise.all(
		items.map(async p => {
			const { metadata } = await import(`../app/(empty)/blog/${p}/page.mdx`);

			return {
				url: `/blog/${p}`,
				icon: metadata.other?.icon,
				...metadata,
			};
		})
	);
}

export async function CheatSheetsItems() {
	const items: string[] = await GetItems("src/app/\\(dashboard\\)/dashboard/cheatsheets/**/*.tsx");

	return Promise.all(
		items.map(async p => {
			const { metadata } = await import(`../app/(dashboard)/dashboard/cheatsheets/${p}/page.tsx`);

			return {
				url: `/dashboard/cheatsheets/${p}`,
				icon: metadata.other?.icon,
				...metadata,
			};
		})
	);
}

export async function DemosItems() {
	const items: string[] = await GetItems("src/app/\\(dashboard\\)/dashboard/demos/**/*.tsx");

	return Promise.all(
		items.map(async p => {
			const { metadata } = await import(`../app/(dashboard)/dashboard/demos/${p}/page.tsx`);

			return {
				url: `/dashboard/demos/${p}`,
				icon: metadata.other?.icon,
				...metadata,
			};
		})
	);
}

export async function ToolsItems() {
	const items: string[] = await GetItems("src/app/\\(dashboard\\)/dashboard/tools/**/*.tsx");

	return Promise.all(
		items.map(async p => {
			const { metadata } = await import(`../app/(dashboard)/dashboard/tools/${p}/page.tsx`);

			return {
				url: `/dashboard/tools/${p}`,
				icon: metadata.other?.icon,
				...metadata,
			};
		})
	);
}

export async function MiscItems() {
	const items: string[] = await GetItems("src/app/\\(dashboard\\)/dashboard/misc/**/*.tsx");

	return Promise.all(
		items.map(async p => {
			const { metadata } = await import(`../app/(dashboard)/dashboard/misc/${p}/page.tsx`);

			return {
				url: `/dashboard/misc/${p}`,
				icon: metadata.other?.icon,
				...metadata,
			};
		})
	);
}
