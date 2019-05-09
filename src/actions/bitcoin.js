import { FETCH_BITCOIN } from "./constants";

export const fetchBitcoin = () => async dispatch => {
  let response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );

  dispatch({
    type: FETCH_BITCOIN,
    bitcoin: response.body
  });
};
