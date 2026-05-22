import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";

import CategoryList from "./components/CategoryList";
import RandomJoke from "./components/RandomJoke";
import Logo from "./img/Chuck.jpg";
import { getRandomJoke } from "./Redux/actions/actions";
import "./styles/App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Condensed", "cursive"].join(","),
  },
});

function App() {
  const dispatch = useDispatch();
  const joke = useSelector((state) => state.randomjoke.text);

  useEffect(() => {
    dispatch(getRandomJoke());
  }, [dispatch]);

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

          <CategoryList />

          <div className="joke-container" aria-live="polite">
            {joke}
          </div>

          <hr />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
