import { makeNationsNamesJson } from "./data/makeNationsNameJson";

async function main() {
  const counryNames = await makeNationsNamesJson("./data/nationsName.txt");
  counryNames.forEach((value) => {
    console.log(value);
  });
}

main();
