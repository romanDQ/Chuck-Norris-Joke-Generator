import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories, getCategoryJoke } from "../Redux/actions/actions";
import Button from "@mui/material/Button";
// eslint-disable-next-line no-unused-vars
import Grid from "../styles/CategoryGrid.css";

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      isRandomjoke: false,
    };
  }

  //get data and set initial state
  componentWillMount() {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((categories) => this.setState({ categories: categories }))
      .catch((err) => console.log(err));
  }

  //get a joke from the chosen category
  categoryJoke(category) {
    this.props.getCategoryJoke(category);
  }

  render() {
    return (
      <div className="category-grid">
        {this.state.categories.map((category) => (
          <Button
            variant="outlined"
            color="success"
            sx={{ margin: 1.25 }}
            onClick={() => this.categoryJoke(category)}
            key={category}
          >
            {category}
          </Button>
        ))}
      </div>
    );
  }
}

//update in Redux and merge into props
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

//dispatch an action in Redux to getCategories and getCategoryJoke
const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
    getCategoryJoke: (category) => dispatch(getCategoryJoke(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
