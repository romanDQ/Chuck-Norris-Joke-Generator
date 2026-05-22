import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CategoryList from "./components/CategoryList";
import RandomJoke from "./components/RandomJoke";
import Logo from "./img/Chuck.jpg";
import { getRandomJoke } from "./Redux/actions/actions";
import "./styles/App.css";

function App() {
  const dispatch = useDispatch();
  const { text: joke, isLoading: isJokeLoading, error: jokeError } = useSelector(
    (state) => state.randomjoke
  );
  const { error: categoriesError } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getRandomJoke());
  }, [dispatch]);

  return (
    <div className="page">
      <div className="wrap">
        <header className="masthead">
          <h1 className="gazette">The Norris Gazette</h1>
          <div className="masthead-meta">
            <span>Est. 2026</span>
            <span className="star">★</span>
            <span>Vol. I · No. 1</span>
            <span className="star">★</span>
            <span>Frontier Edition</span>
            <span className="star">★</span>
            <span>One joke · One legend</span>
          </div>
        </header>

        <section className="hero">
          <div className="hero-text">
            <p className="kicker">
              Featured <span className="pipe">·</span> Random joke generator
              <span className="pipe">·</span> Live wire
            </p>
            <h2 className="title">
              Chuck<br />
              <em>norris</em> speaks.
            </h2>
            <p className="lede">
              Sixteen categories. Endless jokes. A curated dispatch of frontier
              wisdom from the man who once roundhouse-kicked the laws of physics
              straight back into the 19th century.
            </p>
          </div>
          <div className="hero-portrait">
            <figure className="avatar">
              <div className="oval">
                <img src={Logo} alt="Chuck Norris" />
              </div>
              <span className="stamp" aria-hidden="true">Wanted</span>
              <figcaption className="caption">Lone Star portrait</figcaption>
            </figure>
          </div>
        </section>

        <div className="ornament">
          <span className="stars">★ ★ ★</span>
        </div>

        <section className="joke-section" aria-live="polite" aria-busy={isJokeLoading}>
          <p className="joke-label">Today's dispatch</p>

          {isJokeLoading ? (
            <div className="joke-loading">
              <span className="spinner" aria-label="Loading joke" />
            </div>
          ) : jokeError ? (
            <div className="joke-error" role="alert">
              {jokeError}
            </div>
          ) : joke ? (
            <p className="joke-text">
              <span className="drop">{joke.charAt(0)}</span>
              {joke.slice(1)}
            </p>
          ) : null}

          <p className="byline">
            By <strong>chucknorris.io</strong> · Random · Wired in from the
            frontier
          </p>

          <RandomJoke />
        </section>

        <div className="section-header">
          <h3>Browse by category</h3>
          <span>16 topics</span>
        </div>

        {categoriesError && (
          <div className="joke-error" role="alert" style={{ marginBottom: 18 }}>
            Failed to load categories: {categoriesError}
          </div>
        )}

        <CategoryList />

        <footer className="page-footer">
          Printed in the great state of Texas, c. 2026
        </footer>
      </div>
    </div>
  );
}

export default App;
