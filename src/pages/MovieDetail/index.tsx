import { getMovieDetail } from "../../apis/movie";
import { useFetch } from "../../hooks/useFetch";
import MainLayout from "../layout/MainLayout";
import "./style.scss";
import { NavLink, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Button from "../../components/Button";

function MovieDetail() {
  const { id } = useParams();
  const { data, loading } = useFetch(async () => await getMovieDetail(id), []);

  console.log("data deat:", data);

  return (
    <MainLayout>
      <div className="detail">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="detail__banner">
              <NavLink to="/" className="navbar__link detail__back">
                Back
              </NavLink>
              <img
                src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
                alt=""
                className="detail__image"
              />
              <h2 className="detail__title">{data?.original_title}</h2>
            </div>
            <div className="wrap">
              <p className="detail__overview">{data?.overview}</p>
              <p className="detail__release">
                Release Date: {data?.release_date}
              </p>
              <div className="detail__wrapbtn">
                <Button>Watch Movie</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default MovieDetail;
