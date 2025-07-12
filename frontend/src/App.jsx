import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage"
import { Routes, Route } from "react-router";
import MoviePage from "./Pages/MoviePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Homepage />}/>
        <Route path={'/movie/:id'} element={<MoviePage />}/>
      </Routes>
    </div>
  )
}

export default App

