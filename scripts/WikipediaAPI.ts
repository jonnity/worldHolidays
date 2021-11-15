import axios, { AxiosRequestConfig } from "axios";
import { DOMParser } from "xmldom";

export class WikipediaAPI {
  constructor(private readonly country: string) {}

  public async makeHolidaysList() {
    await this.transferWikipediaAPI();
  }
  private async transferWikipediaAPI() {
    const url = "http://ja.wikipedia.org/w/api.php";
    const config: AxiosRequestConfig = {
      params: {
        format: "xml",
        action: "query",
        titles: this.country,
        prop: "revisions",
        rvprop: "content",
        rvparse: true,
      },
    };

    const countryWikipediaXML = await (await axios.get(url, config)).data;
    const doc = new DOMParser().parseFromString(
      countryWikipediaXML,
      "application/xml"
    );
    console.log(doc);

    const holydays = doc.querySelector("a[title='" + this.country + "']");
    console.log(holydays);

    // console.log(countryWikipediaXML);
  }
}
