import Modal from 'react-bootstrap/Modal';

import ExpenseForm from './ExpenseForm';

//@ts-ignore
const ModalComponent = ({ show, handleClose, saveExpenseDataHandler, label }) => {
  return <Modal show={show} onHide={handleClose}>
    <Modal.Body>
      <ExpenseForm onCancel={handleClose} onSaveExpenseData={saveExpenseDataHandler} label={label} />
    </Modal.Body>
  </Modal>
};

export default ModalComponent;