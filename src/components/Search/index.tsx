import { onSearchMovie } from "../../apis/movie";
import "./style.scss";
import { useDispatch } from "./../../hooks/useDispatch";

function Search() {
  const dispatch = useDispatch();

  const handleSearchMovie = async (e: any) => {
    const result = await onSearchMovie(e?.target?.value);
    dispatch({
      type: "search",
      query: e.target.value,
      data: result.results,
      currentPage: 1,
    });
  };
  return (
    <div className="wrapinput">
      <input
        type="text"
        placeholder="Search Movie"
        onChange={(e) => handleSearchMovie(e)}
      />
    </div>
  );
}

export default Search;
