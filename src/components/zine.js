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

  > li {
    cursor: pointer;
  }
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
          <Row>
            <Col xs={4}>
              <CoverImg
                src={data.coverImage.file.url}
                alt={`${data.name} cover`}
                onClick={() => this.showModal(data.coverImage.file.url)}
              />
            </Col>
            <Col xs={2}>
              <DetailList>{this.drawDetails(data.interiorImages)}</DetailList>
            </Col>
            <Col xsOffset={1} xs={5}>
              <h2>{data.name}</h2>
              <p>{data.artists}</p>
              <p>{data.date}</p>
              <p>{data.size}</p>
              <p>{data.summary.summary}</p>
            </Col>
          </Row>
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
