import axios from "axios";
import {
  GET_CATEGORIES,
  GET_RANDOM_JOKE,
  RANDOM_JOKE_ERROR,
  CATEGORIES_ERROR,
  GET_CATEGORY_JOKE,
  GET_CATEGORY_JOKE_ERROR,
} from "./constants";

const API_BASE = "https://api.chucknorris.io";

export const randomJokeSuccess = (data) => ({
  type: GET_RANDOM_JOKE,
  payload: { randomjoke: data.value },
});

export const categoryJokeSuccess = (data) => ({
  type: GET_CATEGORY_JOKE,
  payload: { randomjoke: data.value },
});

export const categoriesSuccess = (categories) => ({
  type: GET_CATEGORIES,
  payload: { categories },
});

export const getRandomJoke = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE}/jokes/random`);
    dispatch(randomJokeSuccess(data));
  } catch (error) {
    dispatch({ type: RANDOM_JOKE_ERROR, error });
  }
};

export const getCategoryJoke = (category) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE}/jokes/random`, {
      params: { category },
    });
    dispatch(categoryJokeSuccess(data));
  } catch (error) {
    dispatch({ type: GET_CATEGORY_JOKE_ERROR, error });
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE}/jokes/categories`);
    dispatch(categoriesSuccess(data));
  } catch (error) {
    dispatch({ type: CATEGORIES_ERROR, error });
  }
};
