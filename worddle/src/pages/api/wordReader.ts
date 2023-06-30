import path from "path";
import { promises as fs } from "fs";

export default async function handler(req: any, res: any) {
  const txtDir = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(txtDir + "/dictionary.txt", "utf8");
  console.log(fileContents);
  return fileContents;
}
