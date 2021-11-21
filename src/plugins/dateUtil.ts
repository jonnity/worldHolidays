import { defineNuxtPlugin } from "#app";

const day = {
  0: "日",
  1: "月",
  2: "火",
  3: "水",
  4: "木",
  5: "金",
  6: "土",
} as const;

export default defineNuxtPlugin((nuxt) => {
  nuxt.provide("formatDateJapanese", (date: Date): string => {
    let formatted = "";
    formatted += date.getFullYear() + "年";
    formatted += date.getMonth() + "月";
    formatted += date.getDate() + "日";
    formatted += " (" + day[date.getDay()] + ")";
    return formatted;
  });
});
