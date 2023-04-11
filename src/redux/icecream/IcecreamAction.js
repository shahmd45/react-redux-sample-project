import { BUY_ICECREAM } from "./IcecreamType";

export const buyIceCream = (data = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: data
  };
};
