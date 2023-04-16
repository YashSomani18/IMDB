import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/header.js";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import MovieDetail from "./pages/movieDetail/movieDetail.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<MovieDetail/>}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>

          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
