/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
exports.createPages =({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const postTemplate = path.resolve('src/templates/post.js');
  return graphql(`{
    allMarkdownRemark(filter: {frontmatter: {published: {ne: false}}}) {
      edges {
         node {
           html
           id
           frontmatter {
            title
            path
            published
            description
            date
           }
         }
      }
    }
  }`)
  .then(res => {
    if(res.errors){
      return Promise.reject(res.errors);
    }
    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })
}