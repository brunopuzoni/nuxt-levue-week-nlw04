import { CountdownState, CountdownMutations } from './types';
import { state as originalState, getters, mutations } from './index';

describe('Store:Countdown:index', () => {
  let state: CountdownState;

  beforeEach(() => {
    state = {
      time: 600,
      isActive: false,
      hasCompleted: false,
    };
  });

  describe('State', () => {
    it('should have an initial state', () => {
      expect(originalState()).toMatchObject({
        time: 0.05 * 60,
        isActive: false,
        hasCompleted: false,
      });
    });
  });

  describe('Getters', () => {
    it('should return minutes', () => {
      const minutes = getters.minutes(state);
      expect(minutes).toBe(10);
    });

    it('should return seconds', () => {
      const seconds = getters.seconds(state);
      expect(seconds).toBe(0);
    });
  });

  describe('Mutations', () => {
    it('should set time', () => {
      mutations[CountdownMutations.SET_TIME](state, 10);

      expect(state.time).toBe(10);
    });
    it('should reset time', () => {
      mutations[CountdownMutations.RESET_TIME](state);

      expect(state.time).toBe(3);
    });
    it('should set is active', () => {
      mutations[CountdownMutations.SET_IS_ACTIVE](state, true);

      expect(state.isActive).toBe(true);
    });
    it('should set has completed', () => {
      mutations[CountdownMutations.SET_HAS_COMPLETED](state, true);

      expect(state.hasCompleted).toBe(true);
    });
  });
});
