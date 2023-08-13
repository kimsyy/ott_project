import React, { ReactNode } from "react";
import { styled, keyframes } from "styled-components";
import ModalPortal from "./ModalPortal";

interface Props {
  children: ReactNode;
  setOnModal: (state: boolean) => void;
}

const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Dimed = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = styled.div`
  width: 700px;
  background-color: #111;
  border-radius: 8px;
  box-shadow: -4px 0px 70px -12px rgba(0, 0, 0, 0.75);
  animation: ${FadeIn} 0.4s;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  color: #fff;
  font-size: 1.4rem;
`;

const Content = styled.div`
  padding: 20px;
`;

function ModalFrame({ children, setOnModal }: Props) {
  const hideModal = () => {
    setOnModal(false);
  };
  return (
    <ModalPortal>
      <Dimed onClick={hideModal}>
        <Modal onClick={e => e.stopPropagation()}>
          <Header>
            <CloseButton onClick={hideModal}>X</CloseButton>
          </Header>
          <Content>{children}</Content>
        </Modal>
      </Dimed>
    </ModalPortal>
  );
}

export default ModalFrame;
