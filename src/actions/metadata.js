import { FETCH_LOREM } from "./constants";

export const fetchLorem = () => async dispatch => {
  try {
    let response = await fetch("https://loripsum.net/api/1/short/");

    dispatch({
      type: FETCH_LOREM,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
  }
};
