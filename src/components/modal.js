import React from 'react';
import styled from 'styled-components';

const ModalScreen = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWindow = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;

  background-color: rgba(0, 0, 0, 0.95);
  padding: 50px;

  overflow-y: scroll;

  @media (min-width: 1200px) {
    width: 60vw;
  }

  > h4 {
    display: inline;
    padding: 0 15px;
  }

  > hr {
    margin: 15px 0;
  }

  > img {
    display: block;
    margin: 0 auto;
    position: relative;
  }
`;

export default props => (
  <ModalScreen
    style={{
      display: props.attr.display,
      overflow: props.attr.overflow,
      position: props.attr.position,
    }}
    onClick={props.hideModal}
  >
    <ModalWindow>
      <img src={props.activeImage.url} />
    </ModalWindow>
  </ModalScreen>
);
