import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import BookModal from "./BookModal";
import { useState } from "react";
import Col from "react-bootstrap/Col";

const BookCard = ({ book }) => {
  const [modalShow, setModalShow] = useState(false);
  function authors(authors){
    return authors.map((author) =>{
       return author.name
    }).join(", ")
  }
  return (
    <Col>
      <Card style={{ width: "20rem"}}>
        <Card.Img variant="top" src={book.image} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{authors(book.authors)}</Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            More Info
          </Button>
          <BookModal
            show={modalShow}
            bookInfo={book}
            onHide={() => setModalShow(false)}
            authors={authors(book.authors)}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
