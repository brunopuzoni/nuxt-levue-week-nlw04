<template>
  <div class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani">
    <CountdownDigits :digits="minutes" />
    <span class="bg-background px-2">:</span>
    <CountdownDigits :digits="seconds" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { mapState, mapGetters, mapMutations } from 'vuex';
import { CountdownMutations } from '~/store/Countdown/types';

import CountdownDigits from '~/components/atoms/CountdownDigits.vue'

let TIMEOUT_REF: ReturnType<typeof setTimeout>;

export default Vue.extend({
  components: { CountdownDigits },

  computed: {
    ...mapState('Countdown', ['time', 'isActive']),
    ...mapGetters('Countdown', ['minutes', 'seconds']),
  },

  watch: {
    isActive (newValue: boolean) {
      this.runCountdown(newValue);

      if (!newValue) {
        this.resetTime();
      }
    },

    time (newValue: number) {
      if (newValue > 0) {
        this.runCountdown(true);
      } else {
        this.$emit('completed');
      }
    },
  },

  methods: {
    ...mapMutations('Countdown', {
      setTime: CountdownMutations.SET_TIME,
      resetTime: CountdownMutations.RESET_TIME,
    }),
    runCountdown (flag: boolean) {
      if (this.isActive && flag) {
        TIMEOUT_REF = setTimeout(() => {
          this.setTime(this.time - 1);
        }, 1000);
      } else {
        clearTimeout(TIMEOUT_REF);
      }
    },
  },

})
</script>
