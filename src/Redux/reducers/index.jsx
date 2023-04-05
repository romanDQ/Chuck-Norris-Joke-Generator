import { combineReducers } from "redux";
import reducers from "./reducers";

const rootReducer = combineReducers({
  categories: reducers,
  randomjoke: reducers,
});

export default rootReducer;
