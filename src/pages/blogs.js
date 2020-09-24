import React, { Component } from "react"
import CompactSidebar from "./components/compactsidebar";
import TopNav from "./components/topnav";
import Article from "./components/article";
import {Container, Row, Col, CardDeck, CardColumns} from "react-bootstrap";
import "../stylesheets/mainStyle.css";


class Blogs extends Component{
  render (){
    let articles=this.props.data;
    return (
      <div className="body-page">
        <TopNav selected="blogs"></TopNav>
        <Container fluid>
          <Row>
            <Col md="1" className="d-none d-md-block"><CompactSidebar></CompactSidebar></Col>
            <Col md="11">
              <div className="infoside">
                <div className="pageHead">
                  <p>Blogs !</p>
                </div>
                <div className ="cardblock">
                  <CardColumns>
                    {
                      articles.allMarkdownRemark.edges.map(pages=>(
                        <Article page={pages} key={pages.node.id}></Article>   
                      ))
                    }
                    </CardColumns>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}
export const pageQuery = graphql `
  query ListBlogsQuery {
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
  }
  
`

export default Blogs;