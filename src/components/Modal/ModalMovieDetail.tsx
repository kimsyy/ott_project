import React from "react";
import { styled } from "styled-components";
import ModalFrame from "./ModalFrame";
import { MOVIE_IMG_URL } from "../../constants/path";
import { MovieType } from "../Row";

interface Props {
  setOnModal: (state: boolean) => void;
  data: MovieType | null;
}

const ImageWrap = styled.div`
  img {
    width:100%;
    height:auto;
  }
`;

const Title = styled.div`
  margin-top:20px;
  font-size:1.4rem;
  color:#fff;
`;

const Desc = styled.div`
  margin-top:20px;
  font-size:1.1rem;
  line-height:1.4;
  color:#999;
`

function ModalMovieDetail({ setOnModal, data }: Props) {
  return (
    <ModalFrame setOnModal={setOnModal}>
      <ImageWrap>
        <img src={MOVIE_IMG_URL + data?.backdrop_path} alt={data?.title} />
      </ImageWrap>
      <Title>{data?.title}({data?.original_title})</Title>
      <Desc>{data?.overview}</Desc>
    </ModalFrame>
  );
}

export default ModalMovieDetail;
