import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { styled } from "styled-components";
import Axios from "../../api/axios";
import requests from "../../api/request";
import { MovieType } from "../../components/Row";
import { MOVIE_IMG_URL } from "../../constants/path";

const Wrap = styled.div``;

const List = styled.ul`
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

const Item = styled.li`
  float: left;
  position: relative;
  width: calc(50% - 20px);
  margin: 10px;

  .img-wrap {
    position: relative;
    height: 0;
    padding-bottom: 56.5%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .title {
    position: absolute;
    bottom: 20px;
    right: 20px;
    margin-top: 20px;
    font-size: 1.5rem;
    color: #fff;
  }
`;

function SearchPage() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<MovieType[]>([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm: String) => {
    try {
      const response = await Axios.get(
        `${requests.fetchSearchMulti}?query=${searchTerm}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickItem = (id: number) => {
    navigate(`/${id}`);
  };

  const renderItem = () => {
    return searchResults.map(item => {
      return (
        <Item key={item.id} onClick={() => handleClickItem(item.id)}>
          <div className="img-wrap">
            <img src={MOVIE_IMG_URL + item.backdrop_path} alt={item.title} />
          </div>
          <div className="title">{item.title || item.name}</div>
        </Item>
      );
    });
  };

  if (searchResults.length === 0) {
    return <div>검색결과가 없습니다</div>;
  }
  return (
    <Wrap>
      <List>{renderItem()}</List>
    </Wrap>
  );
}

export default SearchPage;
