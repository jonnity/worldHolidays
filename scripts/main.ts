import { NationNameListReader } from "./NationNameListReader";
import { WikipediaAPI } from "./WikipediaAPI";

async function main() {
  const nationNameList = await new NationNameListReader(
    "./data/nationsName.txt"
  ).makeNationNameListJson();
  // nationNameList.forEach((value) => {
  //   console.log(value);
  // });
  const wikipedia = new WikipediaAPI(nationNameList[0].japanese);
  wikipedia.makeHolidaysList();
}

main();
