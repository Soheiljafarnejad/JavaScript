const redux = require("redux");
const createStore = redux.createStore();

const BUY_CAKE = "BUY-CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

createStore();
