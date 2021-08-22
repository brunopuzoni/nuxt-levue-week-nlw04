import { ChallengesMutations } from './Challenges/types';

export const actions = {
  nuxtServerInit({ commit }: any, { app }: any) {
    const cookie = app.$cookiz.get('movueit');

    if (cookie) {
      commit(`Challenges/${ChallengesMutations.SAVE_COOKIE_DATA}`, cookie);
    }
  },
};
