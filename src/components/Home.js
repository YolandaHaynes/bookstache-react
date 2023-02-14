import BookCard from "./BookCard";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Home = () => {
  const [list, setList] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/f9ac5adb-8271-439e-803d-500e4d27c72d")
      .then((response) => response.json())
      .then((result) => {
        setList(result);
        if (result.books.length > 0) {
          setBooks(
            result.books.map((obj, i) => {
              return <BookCard book={obj} key={i} />;
            })
          );
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row banner">
          <div className="title col-lg-8 offset-lg-2 my-5">
            <h1>{list.name}</h1>
          </div>
        </div>
        <div>
          <Container>
            <Row>{books}</Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
