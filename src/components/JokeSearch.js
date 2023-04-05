import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchCategoryJoke } from "../actions/actions";

const JokeSearch = ({ joke, fetchCategoryJoke }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCategoryJoke(`https://api.chucknorris.io/jokes/search?query=${query}`);
  };

  if (!joke) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {joke.result.length > 0 ? (
        <div>
          <p>{joke.result[0].value}</p>
        </div>
      ) : (
        <div>No jokes found.</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
  };
};

export default connect(mapStateToProps, { fetchCategoryJoke })(JokeSearch);
