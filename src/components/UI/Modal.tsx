import Modal from 'react-bootstrap/Modal';

interface ModalComponentProps {
  handleClose: () => void;
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ handleClose, children }) => {
  return <Modal show={true} onHide={handleClose}>
    <Modal.Body>
      {children}
    </Modal.Body>
  </Modal>
};

export default ModalComponent;