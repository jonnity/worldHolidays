<template>
  <div>
    <p>{{ dateString }}.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    dateString: String,
  },
});
</script>
