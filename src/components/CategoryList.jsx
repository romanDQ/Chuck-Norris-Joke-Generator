import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
        <button
          type="button"
          key={category}
          className="cat"
          disabled={isJokeLoading}
          onClick={() => dispatch(getCategoryJoke(category))}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
