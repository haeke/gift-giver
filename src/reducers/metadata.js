import { FETCH_LOREM } from "../actions/constants";

const initialState = {
  data: null,
  metadata: {
    pending: false,
    loaded: false,
    error: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOREM:
      return {
        ...state,
        data: action.payload,
        metadata: {
          ...state.metadata,
          pending: false,
          loaded: true,
          error: false
        }
      };
    default:
      return state;
  }
};
