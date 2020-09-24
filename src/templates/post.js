import React from 'react';
import { graphql } from 'gatsby';
import TopNav from "../pages/components/topnav";
import "../stylesheets/mainStyle.css";
import CompactSidebar from "../pages/components/compactsidebar";
import {Container, Row, Col, CardDeck} from "react-bootstrap";
import SEO from "../components/seo";
export default function Template({data}){
  const {markdownRemark: post}=data;
  return (
    <div className="article-section">
      <SEO title={post.frontmatter.title} pathname={post.frontmatter.path} />
      <TopNav></TopNav>
      <Container fluid>
          <Row>
            {/* <Col md="1" className="d-none d-md-block" fixed><CompactSidebar></CompactSidebar></Col> */}
            <Col md="12">
              <div className="article-space">
                <div className="article-title">
                  <h2>{post.frontmatter.title}</h2>
                  <p>{post.frontmatter.date}</p>
                  <p className="authorname">Aishwarya Sah</p>
                </div>
                <div className="article-content">
                  <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                </div>
                <div className="article-footer">
                  Article by : Aishwarya Sah
                </div>
              </div>
            </Col>
          </Row>
        </Container>
              
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path : String!) {
    markdownRemark(frontmatter: { path: { eq:  $path} published: {ne: false}}) {
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
`