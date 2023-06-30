import { readFileSync, promises as fsPromises } from "fs";
export const wordSelector = async () => {
  const file = await asyncReadFile("./dictionary.txt");
  console.log(file);
};

function asyncReadFile(filename: string) {
  return fsPromises
    .readFile(filename, "utf-8")
    .then((contents: any) => {
      const arr = contents.split(/\r?\n/);
      return arr;
    })
    .catch((err: Error) => {
      console.log(err);
    });
}
