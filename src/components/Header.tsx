import React from "react";
import { styled } from "styled-components";

const Wrap = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 20px 40px;
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0)
  );
  backdrop-filter: blur(0);
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    margin-left: 40px;

    li {
      & + li {
        margin-left: 10px;
      }
      button {
        cursor: pointer;
        padding: 10px;
        color: #fff;
        font-size: 1.1rem;
        font-weight: bold;
        background-color: transparent;
        border: 0;
      }
    }
  }
`;

const Util = styled.div`
  margin-left: auto;
`;

function Header() {
  return (
    <Wrap>
      <Logo>OTT PROJECT</Logo>
      <Nav>
        <ul>
          <li>
            <button>영화</button>
          </li>
          <li>
            <button>드라마</button>
          </li>
        </ul>
      </Nav>
      <Util>검색</Util>
    </Wrap>
  );
}

export default Header;
