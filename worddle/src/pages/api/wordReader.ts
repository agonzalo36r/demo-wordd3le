import path from "path";
import { promises as fs } from "fs";
export default async function handler(req: any, res: any) {
  const txtDir = path.join(process.cwd(), "public/data");
  const fileContents = await fs.readFile(txtDir + "/dictionary.txt", "utf8");
  const lines = fileContents.split("\n").filter((line) => line.length === 5);
  res.status(200).json(lines);
}
