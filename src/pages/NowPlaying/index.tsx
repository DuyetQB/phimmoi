import MainLayout from "../layout/MainLayout";
import "./style.scss";
import Search from "../../components/Search";
import Card from "../../components/Card";
import { useFetch } from "../../hooks/useFetch";
import { getMovieListNowPlaying } from "./../../apis/movie";
import { useEffect, useState } from "react";
import { useQueryContext } from "../../hooks/useQueryContext";

function NowPlaying() {
  const dataContext = useQueryContext();

  const { data, loading } = useFetch(
    async () =>
      await getMovieListNowPlaying({ page: dataContext?.currentPage }),
    [dataContext]
  );
  const [dataInitial, setDataInitial] = useState<any>();

  useEffect(() => {
    if (dataContext?.data.length > 0) {
      setDataInitial(dataContext);
      return;
    }
    setDataInitial(data);
  }, [dataContext, data]);

  return (
    <MainLayout>
      <Search />
      <div className="wrap">
        {dataContext?.query ? (
          <h2 className="wrap__title">
            You are search for: ` {dataContext?.query} `
          </h2>
        ) : (
          <h2 className="wrap__title">Now Playing</h2>
        )}
        <Card data={dataInitial} loading={loading} />
      </div>
    </MainLayout>
  );
}

export default NowPlaying;
