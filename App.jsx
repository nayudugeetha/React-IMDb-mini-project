import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(movie => movie.imdbID !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addFavorite={addFavorite} />} />
        <Route path="/movie/:id" element={<MovieDetails addFavorite={addFavorite} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} removeFavorite={removeFavorite} />} />
      </Routes>
    </Router>
  );
};

export default App;
