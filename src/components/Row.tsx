import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "../api/axios";
import requests from "../api/request";

interface ListData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: object;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const RowType = {
  DEFAULT: 'default',
  RANK: 'rank',
} as const;

type RowType = typeof RowType[keyof typeof RowType];

interface Props {
  title: string;
  fetchUrl: string;
  type?: RowType;
  length?: number;
}

const Wrap = styled.div``;

const Title = styled.div``;

const List = styled.ol``;

const Item = styled.li``;

function Row({title, fetchUrl, type = RowType.DEFAULT, length = 10}: Props) {
  const [listData, setListData] = useState<ListData[] | null>(null);
  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const { data } = await axios.get(fetchUrl);
    setListData(data.results.slice(0,length));
  };

  const renderList = () => {
    return listData?.map(item => {
      return <Item>{item.title}</Item>;
    });
  };

  if (listData === null) {
    return <div>...Loading</div>;
  }

  return (
    <Wrap>
      <Title>{title}</Title>
      <List>{renderList()}</List>
    </Wrap>
  );
}

export default Row;
