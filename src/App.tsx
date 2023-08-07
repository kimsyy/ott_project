import React from "react";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import requests from "./api/request";
import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import Row, { RowType } from "./components/Row";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body{width:100%;height:100%;}
  body{color:#fff;font-size:16px;line-height:1.2;background-color:#000;}
`;

const Wrap = styled.div`
  height: 100vh;
  background-color: #000;
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrap>
        <Header />
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
      </Wrap>
    </React.Fragment>
  );
}

export default App;
