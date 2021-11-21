<template>
  <div>
    <!-- <loading /> -->
    <p class="text-center text-3xl font-black m-5">
      今日が休日の国もあります。みんなも休もう。
    </p>
    <div v-show="dateString">
      <div class="m-4">
        <date-setter
          @setDate="(value:string) => {dateString=value}"
          :dateString="dateString"
        />
      </div>
      <div>
        <show-date :dateString="dateString" />
        <holiday-countries :dateString="dateString" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { format } from "date-fns";
export default defineComponent({
  data() {
    return {
      dateString: "",
      loading: true,
    };
  },
  mounted() {
    this.dateString = format(new Date(), "yyyy-MM-dd");
    this.loading = false;
  },
});
</script>
