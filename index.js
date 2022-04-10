const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY-CAKE";
const BUY_ICE = "BUY-ICE";

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

function buyIce() {
  return {
    type: BUY_ICE,
  };
}

const initCake = {
  numberCake: 10,
};

const initIce = {
  numberIce: 20,
};

const cakeReducer = (state = initCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberCake: state.numberCake - 1 };
    default:
      return state;
  }
};

const iceReducer = (state = initIce, action) => {
  switch (action.type) {
    case BUY_ICE:
      return { ...state, numberIce: state.numberIce - 1 };
    default:
      return state;
  }
};

const reducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
});

const store = createStore(reducer);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIce());

unsubscribe();
