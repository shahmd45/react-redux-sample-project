import { BUY_ICECREAM } from "./IcecreamType";

const initialState = {
  noOfIcecream: 100
};

function iceCreamReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecream: state.noOfIcecream - action.payload
      };

    default:
      return state;
  }
}

export default iceCreamReducer;
