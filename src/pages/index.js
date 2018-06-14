import React from 'react';
import Link from 'gatsby-link';

import Home from '../components/home';

const IndexPage = data => <Home data={data} />;

export default IndexPage;

export const query = graphql`
  query getZines {
    allContentfulZine {
      edges {
        node {
          id
          name
          coverImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
