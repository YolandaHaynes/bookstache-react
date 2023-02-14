import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BookModal = ({show, onHide, bookInfo, authors}) => {
  return (
    <Modal
      show = {show}
      onHide= {onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            {bookInfo.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={bookInfo.image} alt={bookInfo.title}/>
        <p>{authors}</p>
        <p>Description:  {bookInfo.description}</p>
        <span>{bookInfo.isbn10}</span>
        <br></br>
        <span>{bookInfo.isbn13}</span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookModal