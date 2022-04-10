const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY-CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

const initState = {
  numberCake: 10,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberCake: state.numberCake - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("initial state", store.getState());

store.subscribe(() => console.log("updated", store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

