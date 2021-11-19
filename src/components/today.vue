<template>
  <div>
    <div>
      <span>{{ today }}.</span>
    </div>
    <div>
      <p>It is holiday in:</p>
      <ul>
        <li v-for="holidayInfo in holidaysList" :key="holidayInfo.countryName">
          {{ holidayInfo.countryName }} ({{ holidayInfo.holidayName }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Holidays from "date-holidays";

export default defineComponent({
  data() {
    return {
      today: new Date().toLocaleString(),
      holidaysList: [],
    };
  },
  mounted() {
    const countries = new Holidays().getCountries();

    const targetDate = new Date(this.today);
    targetDate.setHours(0, 0, 0, 0);
    for (const country in countries) {
      const countryHolidaysReader = new Holidays(country);
      const countryHolidays = countryHolidaysReader.getHolidays(
        targetDate.getFullYear()
      );
      const isHoliday = countryHolidaysReader.isHoliday(targetDate);

      if (isHoliday) {
        const countryName = countries[country];
        const holidayName = countryHolidays.find(
          (value) => new Date(value.date).getDate() == targetDate.getDate()
        )?.name;
        console.log(countryHolidays);

        this.holidaysList.push({
          countryName: countryName,
          holidayName: holidayName,
        });
      }
    }
  },
});
</script>
