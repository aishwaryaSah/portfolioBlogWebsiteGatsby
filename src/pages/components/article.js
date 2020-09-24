import React, { Component } from "react";
import {Card} from "react-bootstrap";

class Article extends Component{
  render (){
    let page=this.props.page;
    if(page===undefined)
      return <div></div>;
    return (
      <Card style={{ width: '24rem' }} className={page.node.frontmatter.path}>
        <Card.Body>
        <Card.Link href={page.node.frontmatter.path}>

          <Card.Title>{page.node.frontmatter.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{page.node.frontmatter.date}</Card.Subtitle>
          <Card.Text>
            {page.node.frontmatter.description}
          </Card.Text>
          </Card.Link>
        </Card.Body>
      </Card>
    );
  };
}

export default Article;