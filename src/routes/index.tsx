import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NowPlaying from '../pages/NowPlaying';
import TopRated from '../pages/TopRated';
import MovieDetail from '../pages/MovieDetail';

function BaseRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NowPlaying />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default BaseRoutes
