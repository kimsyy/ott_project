import React, { useEffect } from "react";
import axios from "./api/axios";
import requests from "./api/request";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    console.log(request);
  };
  return <div className="App">hi</div>;
}

export default App;
