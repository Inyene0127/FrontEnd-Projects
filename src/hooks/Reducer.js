import { GAME_MODES } from "../utils/constants";
import { DISPATCH_ACTIONS } from "../utils/constants";

//DISPATCH
export const changeGameMode = (newGameMode) => ({
  type: DISPATCH_ACTIONS.CHANGE_GAMEMODE,
  payload: newGameMode,
});

export const changeRound = (newRound) => ({
  type: DISPATCH_ACTIONS.CHANGE_ROUND,
  payload: newRound,
});

export const changeTimer = (timer) => ({
  type: DISPATCH_ACTIONS.START_TIMER,
  payload: timer,
});

export const changePlayedRounds = (newPlayedRounds) => ({
  type: DISPATCH_ACTIONS.CHANGE_PLAYED_ROUNDS,
  payload: newPlayedRounds,
});

export const changeCurrentQuestion = (currentQuestion) => ({
  type: DISPATCH_ACTIONS.CHANGE_CURRENT_QUESTION,
  payload: currentQuestion,
});

export const changeIsLoading = (isLoading) => ({
  type: DISPATCH_ACTIONS.CHANGE_IS_LOADING,
  payload: isLoading,
});
export const changePreviousRoundAnswer = (previousRoundAnswer) => {
  console.log({ fromDispatch: previousRoundAnswer });
  return {
    type: DISPATCH_ACTIONS.CHANGE_PREVIOUS_ROUND_ANSWER,
    payload: previousRoundAnswer,
  };
};
export const clearPreviousRoundAnswer = () => ({
  type: DISPATCH_ACTIONS.CLEAR_PREVIOUS_ROUND_ANSWER,
});

export const initialState = () => ({
  round: 3,
  timer: null,
  gameMode: GAME_MODES.GAME_DISPLAY,
  playedRounds: [],
  currentQuestion: null,
  isLoading: false,
  previousRoundAnswer: [],
  gameHistory: [],
});

//SETTER
const setRound = (state, newRound) => ({
  ...state,
  round: newRound,
});

const setGameMode = (state, newGameMode) => ({
  ...state,
  gameMode: newGameMode,
});

const setTimer = (state, timer) => {
  console.log({ state: state });
  const allTimers = state.previousRoundAnswer.reduce((total, curr) => {
    return (total += curr.time);
  }, 0);
  return {
    ...state,
    timer: allTimers,
    gameHistory: [...state.gameHistory, state.previousRoundAnswer],
  };
};

const setPlayedRounds = (state, playedRounds) => ({
  ...state,
  playedRounds,
});

const setCurrentQuestion = (state, currentQuestion) => ({
  ...state,
  currentQuestion,
});

const setPreviousRoundAnswer = (state, previousRoundAnswer) => ({
  ...state,
  previousRoundAnswer: [...state.previousRoundAnswer, previousRoundAnswer],
});

const setClearPreviousRoundAnswer = (state) => ({
  ...state,
  previousRoundAnswer: [],
});

const setIsLoading = (state, newIsLoading) => ({
  ...state,
  isLoading: newIsLoading,
});

export const reducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case DISPATCH_ACTIONS.CHANGE_GAMEMODE:
      return setGameMode(state, action.payload);
    case DISPATCH_ACTIONS.CHANGE_ROUND:
      return setRound(state, action.payload);
    case DISPATCH_ACTIONS.START_TIMER:
      return setTimer(state, action.payload);
    case DISPATCH_ACTIONS.CHANGE_PLAYED_ROUNDS:
      return setPlayedRounds(state, action.payload);
    case DISPATCH_ACTIONS.CHANGE_CURRENT_QUESTION:
      return setCurrentQuestion(state, action.payload);
    case DISPATCH_ACTIONS.CHANGE_PREVIOUS_ROUND_ANSWER:
      console.log({ payload: action.payload });
      return setPreviousRoundAnswer(state, action.payload);
    case DISPATCH_ACTIONS.CLEAR_PREVIOUS_ROUND_ANSWER:
      return setClearPreviousRoundAnswer(state);
    case DISPATCH_ACTIONS.CHANGE_IS_LOADING:
      return setIsLoading(state, action.payload);

    default:
      throw new Error("Invalid");
  }
};
