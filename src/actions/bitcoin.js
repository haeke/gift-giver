import { FETCH_BITCOIN } from "./constants";
// fetchBitcoin uses redux thunk and async await to request data from the coindesk api. Need to add proper error handling.
export const fetchBitcoin = () => async dispatch => {
  try {
    let response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );

    dispatch({
      type: FETCH_BITCOIN,
      bitcoin: response.body
    });
  } catch (error) {
    console.error(error);
  }
};
