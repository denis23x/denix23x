import { readFile } from "fs/promises";

export async function readFileAsText(path: string): Promise<string> {
	return readFile(process.cwd() + path).then((b: Buffer) => b.toString());
}
