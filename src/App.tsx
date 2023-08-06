import React, { useEffect } from "react";
import axios from "./api/axios";
import requests from "./api/request";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body{width:100%;height:100%;}
  body{color:#fff;font-size:16px;line-height:1.2;}
`;

const Wrap = styled.div`
  height: 100vh;
  background-color: #000;
`;

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    console.log(request);
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrap>
        <Header />
        배경
      </Wrap>
    </React.Fragment>
  );
}

export default App;
