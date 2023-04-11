import React from "react";
import { connect } from "react-redux";
import { buyCake, buyPastery } from "../redux/cake/CakeAction";

const Cake = (props) => {
  const {
    cake: { noOfCakes, noOfPastery },
    getCake,
    getPastery
  } = props;
  return (
    <>
      <div>In my cake store, I have no of cake is {noOfCakes} </div>
      <div>In my cake store, I have no of Pastery is {noOfPastery} </div>
      <br />

      <button onClick={() => getCake()}>Buy Cake</button>
      <button onClick={() => getPastery()}>Buy Pastery</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cake: state.cake
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCake: (data) => dispatch(buyCake(data)),
    getPastery: (data) => dispatch(buyPastery(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
