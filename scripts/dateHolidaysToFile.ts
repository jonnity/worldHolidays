import Holidays from "date-holidays";
import * as fs from "fs";

const countries = new Holidays().getCountries();
console.log(countries);
console.log(countries.length);
