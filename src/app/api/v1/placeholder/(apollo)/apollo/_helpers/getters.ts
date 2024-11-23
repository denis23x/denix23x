import type { List } from "@/app/api/v1/placeholder/(apollo)/apollo/_server/types/list";
import type { GraphQLResolveInfo } from "graphql/type";
import { parseResolveInfo } from "graphql-parse-resolve-info";

export const getSelect = (info: GraphQLResolveInfo, name: string): string => {
	const p = parseResolveInfo(info);

	// @ts-expect-error unused vars
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { post, posts, user, users, comment, comments, ...fields } = p?.fieldsByTypeName[name] || {};

	return (
		Object.keys(fields)
			.map((field: string) => `"${field}"`)
			.join(", ") || "*"
	);
};

export const getSet = <T>(input: Partial<T>) => {
	const fields: string[] = [];

	Object.entries(input).forEach(([key, value]) => {
		if (["avatar", "cover"].includes(key)) {
			fields.push(`"${key}" = ${value ? `'${value}'` : `NULL`}`);
		} else if (key === "tags") {
			fields.push(`"${key}" = ARRAY[${(value as string[]).map(t => `'${t}'`).join(", ")}]`);
		} else {
			fields.push(`"${key}" = '${value}'`);
		}
	});

	return fields.join(", ");
};

export const getInsert = <T extends Record<string, unknown>>(input: T) => {
	const fields: string[] = [];
	const values: string[] = [];

	Object.entries(input).forEach(([key, value]) => {
		fields.push(`"${key}"`);

		if (["avatar", "cover"].includes(key)) {
			values.push(`${value ? `'${value}'` : `NULL`}`);
		} else if (key === "tags") {
			values.push(`ARRAY[${(value as string[]).map(t => `'${t}'`).join(", ")}]`);
		} else {
			values.push(`'${value}'`);
		}
	});

	return `(${fields.join(", ")}, "createdAt", "updatedAt") VALUES (${values.join(", ")}, NOW(), NOW())`;
};

export const getLike = (args: List, where: string): string => {
	return args.like ? `WHERE "${where}" LIKE '%${args.like}%'` : "";
};
