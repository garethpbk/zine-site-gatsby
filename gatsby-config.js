module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `rnpqidzxa4bk`,
        accessToken: `f373270dff58d4b986cc601bfb80f4edd1217d2328170f77587479c046154df8`,
      },
    },
  ],
};
