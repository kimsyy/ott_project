import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import MainPage from "./pages/MainPage/Index";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body{width:100%;height:100%;}
  body{color:#fff;font-size:16px;line-height:1.2;background-color:#000;}
`;

const Wrap = styled.div`
  height: 100vh;
  background-color: #000;
`;

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Outlet />
    </Wrap>
  );
};

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="main" element={<MainPage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
