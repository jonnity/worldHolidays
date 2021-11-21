<template>
  <div class="text-center text-2xl font-black">
    <span>{{ formattedDateString }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { format } from "date-fns";

export default defineComponent({
  props: {
    dateString: String,
  },
  computed: {
    formattedDateString() {
      if (this.dateString) {
        const date = new Date(this.dateString);
        return format(date, "yyyy年MM月dd日");
      }
    },
  },
  mounted() {},
});
</script>
