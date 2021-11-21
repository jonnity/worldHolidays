<template>
  <div>
    <div
      class="absolute left-0 right-0 top-0 bottom-0 mx-auto my-5 z-50"
      v-if="modal"
    >
      <div class="flex justify-center items-center antialiased">
        <div
          class="
            flex flex-col
            w-11/12
            sm:w-5/6
            lg:w-1/2
            max-w-2xl
            mx-auto
            rounded-lg
            border border-gray-300
            shadow-xl
          "
        >
          <div class="flex flex-col px-6 py-5 bg-gray-50">
            <p class="mb-2 font-semibold text-gray-700">Bots Message</p>
            <input type="date" :value="dateString" @change="onChange" />
            <hr />
          </div>
          <div
            class="
              flex flex-row
              items-end
              justify-end
              p-5
              bg-white
              border-t border-gray-200
              rounded-bl-lg rounded-br-lg
            "
          >
            <button
              @click="
                () => {
                  modal = false;
                }
              "
              class="
                mx-1
                px-4
                py-2
                text-gray-900
                font-semibold
                bg-gray-200
                rounded
              "
            >
              キャンセル
            </button>
            <button
              @click="
                () => {
                  if (targetDate) {
                    modal = false;
                    $emit('setDate', targetDate);
                  }
                }
              "
              class="
                mx-1
                px-4
                py-2
                text-white
                font-semibold
                bg-blue-500
                rounded
              "
            >
              決定
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <div>
        <button
          @click="
            () => {
              modal = true;
            }
          "
          class="
            bg-gray-300
            hover:bg-gray-400
            text-gray-800
            font-bold
            py-2
            px-4
            rounded
            inline-flex
            items-center
          "
        >
          <img
            class="fill-current w-6 h-6 mr-2"
            src="../assets/images/calender.svg"
            alt="カレンダー"
          />
          <span>別の日付で休む理由を探す</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      modal: false,
      targetDate: this.dateString,
    };
  },
  props: {
    dateString: String,
  },
  computed: {},
  mounted() {
    console.log(this.dateString);
  },
  methods: {
    onChange(event: Event) {
      const target = event.target;
      if (target instanceof HTMLInputElement) {
        this.targetDate = target.value;
      }
    },
  },
});
</script>
