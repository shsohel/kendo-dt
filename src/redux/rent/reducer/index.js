import { GET_RENTS_BY_QUERY } from '../action-types';

const initialState = {
  rents: [],
  total: 1,
  params: {},
};

const rentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RENTS_BY_QUERY:
      return {
        ...state,
        rents: action.rents,
        total: action.totalPages,
        params: action.params,
      };

    default:
      return state;
  }
};
export default rentReducer;
