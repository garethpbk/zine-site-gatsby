import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const SingleZine = styled.div`
  border: 0px solid black;

  margin: 0 0 25px 0;

  height: auto;
  width: auto;
`;

const RandomButton = styled.button`
  height: 50px;
  width: 125px;

  background-color: steelblue;
  border: 0;
  color: white;
  margin: 0 0 25px 0;
  padding: 15px;
`;

class Home extends Component {
  state = {
    zineIds: [],
  };

  componentDidMount() {
    const allZines = this.props.data.data.allContentfulZine.edges;
    let allZineIds = [];
    allZines.map(zine => {
      const zineId = zine.node.id;
      allZineIds = [...allZineIds, zineId];
    });

    this.setState({
      zineIds: allZineIds,
    });
  }

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

  goToRandom() {}

  render() {
    const allZines = this.props.data.data.allContentfulZine.edges;

    return (
      <div>
        <RandomButton
          onClick={() =>
            navigateTo(
              `/zine/${
                this.state.zineIds[
                  Math.floor(Math.random() * this.state.zineIds.length)
                ]
              }`
            )
          }
        >
          Random
        </RandomButton>
        <Row>{this.drawZines(allZines)}</Row>
      </div>
    );
  }
}

export default Home;
