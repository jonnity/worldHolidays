import * as fs from "fs";
import * as readline from "readline";

type CountryName = {
  japanese: string;
  english: string;
};

export async function makeNationsNamesJson(
  path: string
): Promise<CountryName[]> {
  const stream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: stream,
  });

  let count = 0;
  let japaneseName: string = "";
  let englishName: string = "";
  const countryNames: CountryName[] = [];
  for await (const data of rl) {
    switch (count) {
      case 0:
        japaneseName = data;
        count++;
        continue;
      case 1:
        englishName = data;
        countryNames.push({ japanese: japaneseName, english: englishName });
        count = 0;
        continue;
    }
  }
  return countryNames;
}
