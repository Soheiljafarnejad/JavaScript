const redux = require("redux");
const reduxThunk = require("redux-thunk").default;
const reduxLogger = require("redux-logger");
const axios = require("axios");

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest = () => {
  return { type: FETCH_USER_REQUEST };
};

const fetchUserFailure = (error) => {
  return { type: FETCH_USER_FAILURE, payload: error };
};

const fetchUserSuccess = (user) => {
  return { type: FETCH_USER_SUCCESS, payload: user };
};

const initState = {
  loading: false,
  error: "",
  data: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, error: "", data: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(reduxThunk, logger));
console.log(store.getState());

const fetch = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const dataId = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(dataId));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error));
      });
  };
};

store.dispatch(fetch());
