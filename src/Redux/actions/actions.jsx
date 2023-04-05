import axios from "axios";
import {
  GET_CATEGORIES,
  GET_RANDOM_JOKE,
  RANDOM_JOKE_ERROR,
  CATEGORIES_ERROR,
  GET_CATEGORY_JOKE,
  GET_CATEGORY_JOKE_ERROR,
} from "./constants";

//Get a random joke
export const getRandomJoke = () => {
  return async (dispatch) => {
    await axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        dispatch(randomJokeSuccess(response.data));
      })
      .catch((error) => {
        dispatch({ type: RANDOM_JOKE_ERROR, error });
      });
  };
};

//Random joke is successfully loaded
export const randomJokeSuccess = (data) => {
  return {
    type: GET_RANDOM_JOKE,
    payload: {
      randomjoke: data.value,
      isRandomjoke: true,
    },
  };
};

export const getCategoryJoke = (category) => {
  return async (dispatch) => {
    await axios
      .get("https://api.chucknorris.io/jokes/random?category=" + category)
      .then((randomjoke) => {
        dispatch(categoryJokeSuccess(randomjoke.data));
      })
      .catch((error) => {
        dispatch({ type: GET_CATEGORY_JOKE_ERROR, error });
      });
  };
};
//random joke from category loaded successfully
export const categoryJokeSuccess = (data) => {
  return {
    type: GET_CATEGORY_JOKE,
    payload: {
      randomjoke: data.value,
      isRandomjoke: true,
    },
  };
};

//Getting the categories list
export const getCategories = () => {
  return async (dispatch) => {
    await axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((categories) => {
        dispatch(categoriesSuccess(categories.data));
      })
      .catch((error) => {
        dispatch({ type: CATEGORIES_ERROR, error });
      });
  };
};

//categories loaded successfully
export const categoriesSuccess = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: {
      categories: categories,
    },
  };
};
