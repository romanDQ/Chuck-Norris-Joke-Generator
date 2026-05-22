import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { getRandomJoke } from "../Redux/actions/actions";

function RandomJoke() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={() => dispatch(getRandomJoke())}
      >
        GENERATE RANDOM JOKE
      </Button>
    </div>
  );
}

export default RandomJoke;
