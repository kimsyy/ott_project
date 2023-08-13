import React from "react";
import MainVisual from "../../components/MainVisual";
import Row, { RowType } from "../../components/Row";
import requests from "../../api/request";

function MainPage() {
  return (
    <>
      <MainVisual />
      <Row
        title="영화 10위 랭크"
        fetchUrl={requests.fetchMovieTopRank}
        type={RowType.RANK}
      />
      <Row
        title="인기있는 영화"
        fetchUrl={requests.fetchMoviePopular}
        length={20}
      />
      <Row
        title="개봉예정작"
        fetchUrl={requests.fetchMovieUpcoming}
        length={20}
      />
    </>
  );
}

export default MainPage;
