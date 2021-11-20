<template>
  <div>
    <div>
      <p>{{ today }}.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      today: new Date().toLocaleString(),
    };
  },
  mounted() {},
});
</script>
