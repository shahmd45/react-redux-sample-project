import { BUY_CAKE, BUY_PASTERY } from "./CakeType";

export const buyCake = (data = 1) => {
  return {
    type: BUY_CAKE,
    payload: data
  };
};

export const buyPastery = (data = 1) => {
  return {
    type: BUY_PASTERY,
    payload: data
  };
};
