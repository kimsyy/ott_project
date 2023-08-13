import React, { useEffect, useState} from "react";
import { styled } from "styled-components";
import axios from "../api/axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MOVIE_IMG_URL } from "../constants/path";
import ModalMovieDetail from './Modal/ModalMovieDetail';

export interface MovieType {
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

const Wrap = styled.div`
  margin-bottom:40px;
`;

const Title = styled.div`
  margin:0 0 20px 20px;
  font-size:1.4rem;
  font-weight:bold;
`;

const SwiperSlideItem = styled(SwiperSlide)`
  width: 20%;

  &:first-child{
    margin-left:20px;
  }

  .wrap-img {
    width:100%;
    height:100%;

    img {
      width:100%;
      height:auto;
      object-fit:cover;
      border-radius:4px;
    }
  }
  .title{
    margin-top: 10px;
    font-size:1.2rem;
    line-height:1.4;
  }
`

function Row({title, fetchUrl, type = RowType.DEFAULT, length = 10}: Props) {
  const swiperOption = {
    modules: [Navigation],
    navigation: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
  };
  const [listData, setListData] = useState<MovieType[] | null>(null);

  const [onModal, setOnModal] = useState(false);
  const [selectedMovie, setSelectedMovie]= useState<MovieType | null>(null);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const { data } = await axios.get(fetchUrl);
    setListData(data.results.slice(0,length));
  };

  const handleSlideClick = (movie: MovieType) => {
    setOnModal(true);
    setSelectedMovie(movie);
  }

  const renderList = () => {
    return listData?.map(item => {
      return (
        <SwiperSlideItem key={item.id} onClick={() => handleSlideClick(item)}>
          <div className="wrap-img">
            <img src={MOVIE_IMG_URL + item.backdrop_path} alt={item.title}/>
          </div>
          <div className="title">{item.title}</div>
        </SwiperSlideItem>
      );
    });
  };

  if (listData === null) {
    return <div>...Loading</div>;
  }

  return (
    <Wrap>
      <Title>{title}</Title>
      <Swiper {...swiperOption}>
        {renderList()}
      </Swiper>
      {onModal && <ModalMovieDetail setOnModal={setOnModal} data={selectedMovie} />}
    </Wrap>
  );
}

export default Row;
