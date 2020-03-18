import {
  DECREMENT,
  INCREMENT,
  CHANGE_THEME,
  ENABLE_BTNS,
  DISABLE_BTNS
} from "./constants";
import { combineReducers } from "redux";

const initState = {
  counter: 0,
  dis: false
};

function counterReducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case ENABLE_BTNS:
      return {
        ...state,
        dis: false
      };
    case DISABLE_BTNS:
      return {
        ...state,
        dis: true
      };
    default:
      return state;
  }
}

const initThemeState = {
  theme: "light"
};

function themeReducer(state = initThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
});
