<template>
  <div>
    <p>It is holiday in:</p>
    <ul v-if="dateString">
      <li v-for="holidayInfo in holidaysList" :key="holidayInfo.countryName">
        {{ holidayInfo.countryName }} ({{ holidayInfo.holidayName }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
type HolidayInfo = { countryName: string; holidayName: string };
import Holidays from "date-holidays";

import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
  props: {
    dateString: String,
  },
  computed: {
    holidaysList(): HolidayInfo[] {
      const holidayInfoList: HolidayInfo[] = [];
      const countries = new Holidays().getCountries();
      const targetDate = new Date(this.dateString);
      targetDate.setHours(0, 0, 0, 0);
      for (const country in countries) {
        const countryHolidaysReader = new Holidays(country);
        const holiday = countryHolidaysReader.isHoliday(targetDate);

        if (holiday) {
          const countryName = countries[country];
          const holidayName = holiday[0].name;
          holidayInfoList.push({
            countryName: countryName,
            holidayName: holidayName,
          });
        }
      }
      return holidayInfoList;
    },
  },

  mounted() {},
});
</script>
