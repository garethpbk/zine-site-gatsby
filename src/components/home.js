import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const zines = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SingleZine = styled.div`
  border: 1px solid black;

  margin: 0 0 25px 0;

  height: 300px;
  width: auto;
`;

class Home extends Component {
  drawZines(zines) {
    return zines.map(zine => {
      const entry = zine.node;
      return (
        <Col key={entry.id} xs={12} sm={6} md={4}>
          <SingleZine>
            <img src={entry.coverImage.file.url} />
          </SingleZine>
        </Col>
      );
    });
  }

  render() {
    const allZines = this.props.data.data.allContentfulZine.edges;
    console.log(allZines);

    return (
      <div>
        <Row>{this.drawZines(allZines)}</Row>
      </div>
    );
  }
}

export default Home;
