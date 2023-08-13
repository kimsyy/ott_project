import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Wrap = styled.header<{
  isActive: boolean;
}>`
  z-index: 100;
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

  ${props => {
    if (props.isActive) {
      return `
        background-color:#111;
      `;
    }
  }}
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

const Login = styled.button``;

const Input = styled.input`
  width: 200px;
  padding: 10px;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 8px;
  border: 0;
  background-color: #000;
  outline: 0;
`;

function Header() {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (window.scrollY > headerHeight) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useLayoutEffect(() => {
    if (headerRef.current === null) return;
    setHeaderHeight(headerRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <Wrap isActive={isActive} ref={headerRef}>
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
      <Util>
        {pathname === "/" ? (
          <Login />
        ) : (
          <Input
            type="text"
            placeholder="검색어를 입력하세요"
            onChange={handleInputChange}
          />
        )}
      </Util>
    </Wrap>
  );
}

export default Header;
