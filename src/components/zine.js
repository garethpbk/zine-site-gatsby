import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Modal from './modal';

const CoverImg = styled.img`
  cursor: pointer;
`;

const DetailList = styled.ul`
  list-style-type: none;

  @media (min-width: 768px) {
    display: flex;
    margin: 0;
  }

  > li {
    cursor: pointer;
    padding: 0 10px;

    @media (min-width: 768px) and (max-width: 992px) {
      margin: 0 10px 0 0;
    }
  }
`;

const ZineBody = styled.div`
  /* > div {
    > :nth-child(1) {
      order: 1;
    }
    > :nth-child(2) {
      order: 2;

      @media (min-width: 992px) {
        order: 2;
      }
    }
    > :nth-child(3) {
      order: 3;
    }
  } */
`;

class Zine extends Component {
  state = {
    activeImage: {
      url: '',
    },
    modalAttr: {
      display: 'none',
      overflow: '',
      position: '',
    },
  };

  drawDetails(images) {
    return images.map(image => {
      return (
        <li key={image.file.url}>
          <img
            src={image.file.url}
            onClick={() => this.showModal(image.file.url)}
          />
        </li>
      );
    });
  }

  showModal(url) {
    this.setState({
      activeImage: {
        url,
      },
      modalAttr: {
        display: 'flex',
        overflow: 'hidden',
        position: 'fixed',
      },
    });
  }

  hideModal() {
    this.setState({
      modalAttr: {
        display: 'none',
      },
    });
  }

  render() {
    const data = this.props.pathContext.edge.node;

    return (
      <div>
        <Grid>
          <ZineBody>
            <Row>
              <Col md={5}>
                <CoverImg
                  src={data.coverImage.file.url}
                  alt={`${data.name} cover`}
                  onClick={() => this.showModal(data.coverImage.file.url)}
                />
              </Col>
              <Col mdOffset={1} md={6}>
                <h2>{data.name}</h2>
                <p>{data.artists}</p>
                <p>{data.date}</p>
                <p>{data.size}</p>
                <p>{data.summary.summary}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <DetailList>{this.drawDetails(data.interiorImages)}</DetailList>
              </Col>
            </Row>
          </ZineBody>
        </Grid>
        <Modal
          attr={this.state.modalAttr}
          activeImage={this.state.activeImage}
          hideModal={this.hideModal.bind(this)}
        />
      </div>
    );
  }
}

export default Zine;
