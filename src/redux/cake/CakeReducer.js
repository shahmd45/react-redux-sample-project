import { BUY_CAKE, BUY_PASTERY } from "./CakeType";

const initialState = {
  noOfCakes: 20,
  noOfPastery: 50
};

function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.payload
      };
    case BUY_PASTERY:
      return {
        ...state,
        noOfPastery: state.noOfPastery - action.payload
      };

    default:
      return state;
  }
}

export default cakeReducer;
