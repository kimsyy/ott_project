import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "../api/axios";
import requests from "../api/request";
import { MOVIE_IMG_URL } from "../constants/path";

interface MovieData {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: object;
  budget: number;
  genres: object;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: object;
  production_countries: object;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: object;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Wrap = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 44.5%;
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
  }
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 100px;
  left: 50px;
  font-size: 3rem;
  color: #fff;
  font-weight: bold;
`;

function MainVisual() {
  const [movieData, setMovieData] = useState<MovieData | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get(requests.fetchNowPlaying);
    const id =
      result.data.results[
        Math.floor(Math.random() * result.data.results.length)
      ].id;
    const movieDetail = await axios.get(requests.fetchMovieDetail + id);
    setMovieData(movieDetail.data);
  };

  if (movieData === null) {
    return <div>"Loading..."</div>;
  }

  return (
    <Wrap>
      <Img
        src={MOVIE_IMG_URL + movieData.backdrop_path}
        alt={movieData.title}
      />
      <Title>{movieData.title}</Title>
    </Wrap>
  );
}

export default MainVisual;
