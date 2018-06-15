import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const SingleZine = styled.div`
  border: 0px solid black;

  margin: 0 0 25px 0;

  height: auto;
  width: auto;
`;

class Home extends Component {
  drawZines(zines) {
    return zines.map(zine => {
      const entry = zine.node;
      return (
        <Col key={entry.id} xs={12} sm={6} md={4}>
          <Link to={`/zine/${entry.id}`}>
            <SingleZine>
              <img src={entry.coverImage.file.url} />
            </SingleZine>
          </Link>
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
