import { ChallengesMutations, ChallengesMutationsInterface } from './types';

export default {
  [ChallengesMutations.SET_CURRENT_CHALLENGE_INDEX](state, index) {
    state.currentChallengeIndex = index;
  },
  [ChallengesMutations.SET_IS_LEVEL_UP_MODAL_OPEN](state, flag) {
    state.isLevelUpModalOpen = flag;
  },
  [ChallengesMutations.COMPLETE_CHALLENGE](state, xpAmount) {
    const { current, end } = state.xp;
    const currentTotalXp = xpAmount + current;
    const shouldLevelUp = currentTotalXp >= end;

    state.completedChallenges += 1;

    if (shouldLevelUp) {
      state.level += 1;

      const remainingXp = currentTotalXp - end;
      const xpToNextLevel = Math.pow((state.level + 1) * 4, 2);

      state.xp = {
        current: remainingXp,
        start: 0,
        end: xpToNextLevel,
      };

      state.isLevelUpModalOpen = true;
      return;
    }

    state.xp = {
      ...state.xp,
      current: currentTotalXp,
    };
  },
  [ChallengesMutations.SAVE_COOKIE_DATA](state, cookie) {
    state.level = cookie.level;
    state.xp = cookie.xp;
    state.completedChallenges = cookie.completedChallenges;
  },
} as ChallengesMutationsInterface;
