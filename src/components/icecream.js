import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/icecream/IcecreamAction";

const Icecream = () => {
  const { noOfIcecream } = useSelector((state) => state.iceCream);
  const dispatch = useDispatch();

  return (
    <>
      <div>I have no of ice cream is {noOfIcecream} </div>
      <button onClick={() => dispatch(buyIceCream(30))}>Buy Icecream</button>
    </>
  );
};

export default Icecream;
