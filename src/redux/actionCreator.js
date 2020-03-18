import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  ENABLE_BTNS,
  DISABLE_BTNS
} from "./constants";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const asyncIncrement = () => {
  return function(dispatch) {
    dispatch(disableButtons());
    setTimeout(() => {
      dispatch(increment());
      dispatch(enableButtons());
    }, 1500);
  };
};

export const changeTheme = theme => ({
  type: CHANGE_THEME,
  payload: theme
});

export const enableButtons = () => ({
  type: ENABLE_BTNS
});

export const disableButtons = () => ({
  type: DISABLE_BTNS
});
