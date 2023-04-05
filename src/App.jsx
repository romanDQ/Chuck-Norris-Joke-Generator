import React, { Component, useEffect } from "react";
// import { connect } from "react-redux";
import CategoryButtons from "./components/CategoryList";
import RandomJoke from "./components/RandomJoke";
import Avatar from "@mui/material/Avatar";
import Logo from "./img/Chuck.jpg";
// import "./App.css";
import "./styles/App.css";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getRandomJoke } from "./Redux/actions/actions";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Condensed", "cursive"].join(","),
  },
});

function App() {
  const joke = useSelector((state) => state.randomjoke.randomjoke);
  console.log(joke);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomJoke());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="content">
          <div className="header">
            <Typography variant="h3">
              Welcome to Chuck Norris' random joke generator
            </Typography>
            <div className="avatar-chuck">
              <Avatar
                alt="Chuck Norris"
                src={Logo}
                sx={{ width: 304, height: 304 }}
              />
            </div>
          </div>
          <RandomJoke />
          <Typography variant="h5">Category:</Typography>

          <CategoryButtons />

          <div className="joke-container">{joke}</div>

          <hr />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
