import fs from "fs/promises";
import path from "path";

export async function GET() {
	const directoryPath = path.join(process.cwd(), "./src/app/(dashboard)/dashboard/blog");

	try {
		const files = await fs.readdir(directoryPath);

		return new Response(JSON.stringify(files), {
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error: unknown) {
		return new Response(JSON.stringify({ error }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}
