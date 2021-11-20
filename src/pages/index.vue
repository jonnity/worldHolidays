<template>
  <div>
    <show-date :dateString="dateString" />
    <holiday-countries :dateString="dateString" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      dateString: "",
    };
  },
  mounted() {
    // startLoading()
    this.dateString = new Date().toDateString();
    // endLoading()
  },
});
</script>
