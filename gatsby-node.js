const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const template = path.resolve('src/components/zine.js');
    resolve(
      graphql(`
        {
          allContentfulZine {
            edges {
              node {
                id
                name
                artists
                artistSite
                date
                material
                bindingMethod
                numberOfPages
                size
                tags
                coverImage {
                  id
                  file {
                    url
                  }
                  title
                }
                interiorImages {
                  file {
                    url
                  }
                }
                summary {
                  summary
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulZine.edges.forEach(edge => {
          createPage({
            path: `zine/${edge.node.id}`,
            component: template,
            context: {
              edge,
            },
          });
        });
        return;
      })
    );
  });
};
