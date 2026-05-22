import { useDispatch, useSelector } from "react-redux";
import { getRandomJoke } from "../Redux/actions/actions";

function RandomJoke() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.randomjoke.isLoading);

  return (
    <button
      type="button"
      className="generate"
      disabled={isLoading}
      onClick={() => dispatch(getRandomJoke())}
    >
      Pull another →
    </button>
  );
}

export default RandomJoke;
