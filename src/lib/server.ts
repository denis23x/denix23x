import { readFile } from "fs/promises";

export async function readFileAsText(path: string): Promise<string> {
	return readFile(process.cwd() + "/public" + path).then((b: Buffer) => b.toString());
}
