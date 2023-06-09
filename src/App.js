import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import axios from "axios";
import MoviesList from "./components/MoviesList";
import PaginationComponent from "./components/Pagination";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "./redux/actions/movieAction";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
        <PaginationComponent />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
