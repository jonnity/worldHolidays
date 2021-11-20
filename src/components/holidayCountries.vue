<template>
  <div>
    <p>It is holiday in:</p>
    <ul>
      <li v-for="holidayInfo in holidaysList" :key="holidayInfo.countryName">
        {{ holidayInfo.countryName }} ({{ holidayInfo.holidayName }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Holidays from "date-holidays";

export default defineComponent({
  data() {
    return {
      holidaysList: [],
    };
  },
  props: {
    dateString: String,
  },
  mounted() {
    const countries = new Holidays().getCountries();
    const targetDate = new Date(this.dateString);
    targetDate.setHours(0, 0, 0, 0);
    for (const country in countries) {
      const countryHolidaysReader = new Holidays(country);
      const holiday = countryHolidaysReader.isHoliday(targetDate);

      if (holiday) {
        const countryName = countries[country];
        const holidayName = holiday[0].name;
        this.holidaysList.push({
          countryName: countryName,
          holidayName: holidayName,
        });
      }
    }
  },
});
</script>
