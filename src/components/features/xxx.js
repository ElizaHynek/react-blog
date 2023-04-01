/* import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RemoveModal = props => {

  return (
    <Modal show={props.showModal} onHide={props.handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>This operation will completely remove this post from the app. 
            <br/>Are you sure you want to do that?
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.handleClose} variant="secondary">Cancel</Button>
          <Button onClick={props.handleClose} variant="danger">Remove</Button>
        </Modal.Footer>
      </Modal>
  );
};

export default RemoveModal; */