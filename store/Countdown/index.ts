import {
  CountdownState,
  CountdownGetters,
  CountdownMutations,
  CountdownMutationsInterface,
} from './types';

const MINUTES = 0.05;

export const state = (): CountdownState => ({
  time: MINUTES * 60,
  isActive: false,
  hasCompleted: false,
});

export const getters: CountdownGetters = {
  minutes: (state) => Math.floor(state.time / 60),
  seconds: (state) => state.time % 60,
};

export const mutations: CountdownMutationsInterface = {
  [CountdownMutations.SET_TIME](state, newTime) {
    state.time = newTime;
  },

  [CountdownMutations.RESET_TIME](state) {
    state.time = MINUTES * 60;
  },

  [CountdownMutations.SET_IS_ACTIVE](state, isActive) {
    state.isActive = isActive;
  },

  [CountdownMutations.SET_HAS_COMPLETED](state, hasCompleted) {
    state.hasCompleted = hasCompleted;
  },
};
