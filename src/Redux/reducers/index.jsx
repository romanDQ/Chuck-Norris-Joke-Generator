import { combineReducers } from "redux";
import { categoriesReducer, randomJokeReducer } from "./reducers";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  randomjoke: randomJokeReducer,
});

export default rootReducer;
