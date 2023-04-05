// import React, { Component } from "react";
import { connect } from "react-redux";
import { getRandomJoke } from "../Redux/actions/actions";
import Button from "@mui/material/Button";

function RandomJoke({ getRandomJoke }) {
  // generateJoke() {
  //   this.props.getRandomJoke();
  // }
  const generateJoke = () => {
    getRandomJoke();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={() => generateJoke()}
      >
        GENERATE RANDOM JOKE
      </Button>
    </div>
  );
}

//update in Redux and merge into props
const mapStateToProps = (state) => {
  return {
    randomjoke: state.randomjoke,
  };
};

//dispatch an action getRandomJoke
const mapDispatchToProps = (dispatch) => {
  return {
    getRandomJoke: () => dispatch(getRandomJoke()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomJoke);
