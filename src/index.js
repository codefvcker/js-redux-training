// import { createStore } from "./createStore";
import { createStore, applyMiddleware } from "redux";
import "./styles.css";
import { rootReducer } from "./redux/rootReduces";
import thunk from "redux-thunk";
import {
  increment,
  decrement,
  asyncIncrement,
  changeTheme
} from "./redux/actionCreator";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

function logger(state) {
  return function(next) {
    return function(action) {
      console.log(action);
      console.log("state", state.getState());
      return next(action);
    };
  };
}

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});

themeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter.counter;
  document.body.classList = state.theme.theme;
  themeBtn.setAttribute("disabled", state.counter.dis);

  [addBtn, subBtn, themeBtn, asyncBtn].forEach(
    btn => (btn.disabled = state.counter.dis)
  );
});

store.dispatch({ type: "INIT_APP" });
