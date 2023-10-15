import { IBaseCard } from "../../types/base";
import "./style.scss";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { useState } from "react";
import { useDispatch } from "../../hooks/useDispatch";
import { useQueryContext } from "../../hooks/useQueryContext";
import Loading from "../Loading";
import { motion } from "framer-motion";

const Card = ({ data, loading }: IBaseCard) => {
  const dataContext = useQueryContext();

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(dataContext?.currentPage);
  const itemsPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    dispatch({
      type: "pagination",
      data: dataContext?.data,
      currentPage: page,
    });
  };

  return (
    <>
      <div className="list">
        {loading ? (
          <Loading />
        ) : (
          <>
            {data?.data?.map((item: any, i: number) => (
              <div className="card" key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1.4 }}
                >
                  <img
                    src={`${"https://image.tmdb.org/t/p/w500/"}${
                      item?.poster_path
                    }`}
                    alt=""
                    className="card__image"
                    loading="lazy"
                  />

                  <Link to={`/movie-detail/${item?.id}`} className="card__link">
                    <span style={{ opacity: 1 }}>
                      {item?.title}
                    </span>
                  </Link>
                </motion.div>
              </div>
            ))}
          </>
        )}
      </div>
      <Pagination
        totalItems={data?.total_page}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
export default Card;
