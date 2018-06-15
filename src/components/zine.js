import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Zine extends Component {
  render() {
    const data = this.props.pathContext.edge.node;

    return (
      <div>
        <h1>{data.name}</h1>
        <h2>{data.artists}</h2>
        <a href={`${data.artistSite}`} target="_blank">
          {data.artistSite}
        </a>
        <p>{data.date}</p>
        <p>{data.material}</p>
        <p>{data.bindingMethod}</p>
        <p>{data.numberOfPages}</p>
        <p>{data.size}</p>
        <p>{data.tags}</p>
        <img src={data.coverImage.file.url} />
      </div>
    );
  }
}

export default Zine;
