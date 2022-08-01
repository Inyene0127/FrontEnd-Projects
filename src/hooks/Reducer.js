import { GAME_MODES } from '../utils/constants'
import { DISPATCH_ACTIONS } from "../utils/constants";

//DISPATCH
export const changeGameMode = (newGameMode) => ({
      type: DISPATCH_ACTIONS.CHANGE_GAMEMODE,
      payload: newGameMode
});

export const changeRound = (newRound) => ({
  type: DISPATCH_ACTIONS.CHANGE_ROUND,
  payload: newRound
});

export const startTimer = () => ({
  type: DISPATCH_ACTIONS.START_TIMER
});

export const changePlayedRounds = (newPlayedRounds) => ({
  type: 'changePlayedRounds',
  payload: newPlayedRounds
});

export const initialState = () => ({
  round: 3,
  timer: null,
  gameMode: GAME_MODES.GAME_DISPLAY,
  playedRounds: [],
});

//SETTER
const setRound = (state, newRound) => ({
  ...state,
  round: newRound
});

const setGameMode = (state, newGameMode) => ({
  ...state,
  gameMode: newGameMode
});

const setTimer = (state) => ({
  ...state,
  timer: Date.now()
});

const setPlayedRounds = (state, newPlayedRounds) => ({
  ...state,
  playedRounds: newPlayedRounds
});

export const reducer = (state, action) => {
  switch (action.type) {
    case DISPATCH_ACTIONS.CHANGE_GAMEMODE:
      return setGameMode(state, action.payload);
    case DISPATCH_ACTIONS.CHANGE_ROUND:
      return setRound(state, action.payload);
    case DISPATCH_ACTIONS.START_TIMER:
        return setTimer(state, action.payload);
    case DISPATCH_ACTIONS.CHANGE_PLAYED_ROUNDS:
      return setPlayedRounds(state, action.payload)
    default:
      throw new Error("Invalid");
  }
}
