import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
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
  const { text: joke, isLoading: isJokeLoading, error: jokeError } =
    useSelector((state) => state.randomjoke);
  const { error: categoriesError } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getRandomJoke());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="content">
          <div className="header">
            <Typography variant="h3" align="center">
              Welcome to Chuck Norris' random joke generator
            </Typography>
            <div className="avatar-chuck">
              <Avatar
                alt="Chuck Norris"
                src={Logo}
                sx={{
                  width: { xs: 160, sm: 220, md: 304 },
                  height: { xs: 160, sm: 220, md: 304 },
                }}
              />
            </div>
          </div>

          <RandomJoke />
          <Typography variant="h5">Category:</Typography>
          <CategoryList />

          {categoriesError && (
            <Alert severity="error" sx={{ mt: 2 }} role="alert">
              Failed to load categories: {categoriesError}
            </Alert>
          )}

          <div className="joke-container" aria-live="polite" aria-busy={isJokeLoading}>
            {isJokeLoading ? (
              <CircularProgress color="success" aria-label="Loading joke" />
            ) : jokeError ? (
              <Alert severity="error" role="alert">
                {jokeError}
              </Alert>
            ) : (
              joke
            )}
          </div>

          <hr />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
