import React, { useEffect } from "react";
import axios from "./api/axios";
import requests from "./api/request";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
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
      <div>Hi, I'm an app!</div>
    </React.Fragment>
  );
}

export default App;
