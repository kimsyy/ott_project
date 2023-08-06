import React from "react";
import { styled } from "styled-components";

const Wrap = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 20px;
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
