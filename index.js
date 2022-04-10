const redux = require("redux");
// const createStore = redux.createStore();

const BUY_CAKE = "BUY-CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

const initState = {
  numberCake: 10,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberCake: state.numberCake - 1 };
  }
}

// createStore();
