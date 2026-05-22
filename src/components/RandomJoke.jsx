import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { getRandomJoke } from "../Redux/actions/actions";

function RandomJoke() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.randomjoke.isLoading);

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        disabled={isLoading}
        onClick={() => dispatch(getRandomJoke())}
      >
        GENERATE RANDOM JOKE
      </Button>
    </div>
  );
}

export default RandomJoke;
