import {
  GET_CATEGORIES,
  CATEGORIES_ERROR,
  GET_CATEGORY_JOKE,
  GET_CATEGORY_JOKE_ERROR,
  GET_RANDOM_JOKE,
  RANDOM_JOKE_ERROR,
} from "../actions/constants";

const initialCategoriesState = {
  items: [],
  error: null,
};

export const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { items: action.payload.categories, error: null };
    case CATEGORIES_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const initialJokeState = {
  text: "",
  error: null,
};

export const randomJokeReducer = (state = initialJokeState, action) => {
  switch (action.type) {
    case GET_RANDOM_JOKE:
    case GET_CATEGORY_JOKE:
      return { text: action.payload.randomjoke, error: null };
    case RANDOM_JOKE_ERROR:
    case GET_CATEGORY_JOKE_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
