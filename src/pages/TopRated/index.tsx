import { getMovieListTopRated } from "../../apis/movie";
import Card from "../../components/Card";
import { useFetch } from "../../hooks/useFetch";
import { useQueryContext } from "../../hooks/useQueryContext";
import MainLayout from "../layout/MainLayout";
import "./style.scss";

function TopRated() {
  const dataContext = useQueryContext();
  const { data, loading } = useFetch(async ()=> await getMovieListTopRated({page:dataContext?.currentPage}),[dataContext]);
  return (
    <MainLayout>
    <div className="wrap">
      <h2  className="wrap__title">Top Rated</h2>
      <Card data={data} loading={loading}/>
    </div>
    </MainLayout>
  )
}

export default TopRated
