const path = require('path');
module.exports = {
  siteMetadata: {//informações que vão pro graphql
    title: `viniolimpio3_site`,
    description: `React application with Gatsby library`,
    author: `@vinilimpio3`,
    social:[
      {
        name:'github',
        url:'https://github.com/viniolimpio3'
      }
    ]
  },
  plugins:[
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: path.resolve(__dirname, 'public'),
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    //My Plugins
    {
        resolve:`gatsby-plugin-nprogress`,//barrinha de progressão
        options:{
            color:`tomato`,
            showSpinner:false,
        }
    },
    `gatsby-plugin-react-helmet`,
    //`gatsby-plugin-sitemap`,//gera o sitemap xml
    {
        resolve:`gatsby-plugin-styled-components`,
        options:{
            displayName: process.env.NODE_ENV !== 'production',
        },
    },
    
  ],
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline

}
