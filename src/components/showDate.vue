<template>
  <div class="text-center text-3xl font-black">
    <span class="">今日は </span>
    <span v-if="dateString">{{ formattedDateString }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useNuxtApp } from "#app";

export default defineComponent({
  props: {
    dateString: String,
  },
  computed: {
    formattedDateString() {
      const { $formatDateJapanese } = useNuxtApp();
      const date = new Date(this.dateString);
      return $formatDateJapanese(date);
    },
  },
  mounted() {},
});
</script>
