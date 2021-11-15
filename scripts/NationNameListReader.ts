import * as fs from "fs";
import * as readline from "readline";

type CountryName = {
  japanese: string;
  english: string;
};

export class NationNameListReader {
  constructor(private readonly path: string) {}

  async makeNationNameListJson(): Promise<CountryName[]> {
    const stream = fs.createReadStream(this.path);
    const rl = readline.createInterface({
      input: stream,
    });

    const nationNameList: CountryName[] = [];
    for await (const data of rl) {
      const tmp = data.split(", ");
      nationNameList.push({ japanese: tmp[0], english: tmp[1] });
    }
    return nationNameList;
  }
}
