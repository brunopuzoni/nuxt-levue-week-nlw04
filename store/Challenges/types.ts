import { MutationTree } from 'vuex/types';

export interface XP {
  current: number;
  start: number;
  end: number;
}

export interface Challenge {
  type: string;
  description: string;
  amount: number;
}

export interface Cookie {
  level: number;
  xp: XP;
  completedChallenges: number;
}

export interface ChallengesState {
  level: number;
  xp: XP;
  completedChallenges: number;
  currentChallengeIndex: number | null;
  isLevelUpModalOpen: boolean;
  allChallenges: Challenge[];
}

export interface ChallengesGetters {
  challengesLength: (challengesState: ChallengesState) => number;
  currentXpPercentage: (challengesState: ChallengesState) => number;
  currentChallenge: (challengesState: ChallengesState) => Challenge | null;
}

export enum ChallengesMutations {
  SET_CURRENT_CHALLENGE_INDEX = 'SET_CURRENT_CHALLENGE_INDEX',
  SET_IS_LEVEL_UP_MODAL_OPEN = 'SET_IS_LEVEL_UP_MODAL_OPEN',
  COMPLETE_CHALLENGE = 'COMPLETE_CHALLENGE',
  SAVE_COOKIE_DATA = 'SAVE_COOKIE_DATA',
}

export type RootState = ReturnType<() => ChallengesState>;

export interface ChallengesMutationsInterface extends MutationTree<RootState> {
  [ChallengesMutations.SET_CURRENT_CHALLENGE_INDEX](
    s: ChallengesState,
    p: number,
  ): void;
  [ChallengesMutations.SET_IS_LEVEL_UP_MODAL_OPEN](
    s: ChallengesState,
    p: boolean,
  ): void;
  [ChallengesMutations.COMPLETE_CHALLENGE](s: ChallengesState, p: number): void;
  [ChallengesMutations.SAVE_COOKIE_DATA](s: ChallengesState, p: Cookie): void;
}
