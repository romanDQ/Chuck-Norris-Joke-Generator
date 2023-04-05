import {
  GET_CATEGORIES,
  CATEGORIES_ERROR,
  GET_CATEGORY_JOKE,
  GET_CATEGORY_JOKE_ERROR,
  GET_RANDOM_JOKE,
  RANDOM_JOKE_ERROR,
} from "../actions/constants";

//initial state setup
const initialState = {
  randomjoke: [],
  categories: [],
  isRandomjoke: false,
};

//reducers setup
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;

    case CATEGORIES_ERROR:
      return state;

    case GET_CATEGORY_JOKE:
      return action.payload;

    case GET_CATEGORY_JOKE_ERROR:
      return action.payload;

    case GET_RANDOM_JOKE:
      return action.payload;

    case RANDOM_JOKE_ERROR:
      return state;
    default:
      return state;
  }
};

export default reducer;
