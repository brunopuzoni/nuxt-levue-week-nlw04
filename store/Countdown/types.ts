import { MutationTree } from 'vuex/types';

export interface CountdownState {
  time: number;
  isActive: boolean;
  hasCompleted: boolean;
}

export interface CountdownGetters {
  minutes: (countdownState: CountdownState) => number;
  seconds: (countdownState: CountdownState) => number;
}

export enum CountdownMutations {
  SET_TIME = 'SET_TIME',
  RESET_TIME = 'RESET_TIME',
  SET_IS_ACTIVE = 'SET_IS_ACTIVE',
  SET_HAS_COMPLETED = 'SET_HAS_COMPLETED',
}

export type RootState = ReturnType<() => CountdownState>;

export interface CountdownMutationsInterface extends MutationTree<RootState> {
  [CountdownMutations.SET_TIME](s: CountdownState, p: number): void;
  [CountdownMutations.RESET_TIME](s: CountdownState): void;
  [CountdownMutations.SET_IS_ACTIVE](s: CountdownState, p: boolean): void;
  [CountdownMutations.SET_HAS_COMPLETED](s: CountdownState, p: boolean): void;
}
