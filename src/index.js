import { legacy_createStore as createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

//state가 없으면 default로 0으로 호출한다.
const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
};

store.subscribe(onChange);

const handleAdd = () => {
  store.dispatch({ type: ADD });
};
const handleMinus = () => {
  store.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
