import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { getCategories, getCategoryJoke } from "../Redux/actions/actions";
import "../styles/CategoryGrid.css";

function CategoryList() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const isJokeLoading = useSelector((state) => state.randomjoke.isLoading);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="category-grid">
      {categories.map((category) => (
        <Button
          key={category}
          variant="outlined"
          color="success"
          sx={{ margin: 1.25 }}
          disabled={isJokeLoading}
          onClick={() => dispatch(getCategoryJoke(category))}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

export default CategoryList;
