<template>
  <div class="text-center">
    <div class="">
      <div>
        <ul v-if="dateString">
          <li
            v-for="holidayInfo in holidaysList"
            :key="holidayInfo.countryName"
          >
            {{ holidayInfo.countryName }} は{{
              holidayInfo.holidayName
            }}でお休み
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
type HolidayInfo = { countryName: string; holidayName: string };

import Holidays from "date-holidays";

import { useNuxtApp } from "#app";
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
      const { $japaneseCountryList } = useNuxtApp();
      const japaneseCountryList = $japaneseCountryList();

      const holidayInfoList: HolidayInfo[] = [];
      const countries = new Holidays().getCountries();
      const targetDate = new Date(this.dateString);
      targetDate.setHours(0, 0, 0, 0);
      for (const countryCode in countries) {
        const countryHolidaysReader = new Holidays(countryCode);
        const holiday = countryHolidaysReader.isHoliday(targetDate);

        if (holiday) {
          const countryName = japaneseCountryList[countryCode];
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
