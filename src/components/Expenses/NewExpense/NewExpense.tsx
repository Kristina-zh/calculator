import Modal from '@/components/UI/Modal';
import ExpenseForm from './ExpenseForm';
import { IExpenseData } from "@/components/Expenses/NewExpense/ExpenseForm";

interface NewExpenseProps {
  label: string;
  handleClose: () => void;
  onAdd: (expenseData: IExpenseData) => void;
  onUpdate: (updatedData: IExpenseData, id?: string) => void;
  editMode: boolean;
  itemToEdit?: IExpenseData;
  closeEditModal: () => void
}

const NewExpense: React.FC<NewExpenseProps> = ({ handleClose, onAdd, onUpdate, label, editMode, itemToEdit, closeEditModal }) => {
  return <Modal handleClose={editMode ? closeEditModal : handleClose}>
    <ExpenseForm
      onCancel={editMode ? closeEditModal : handleClose}
      onSaveExpenseData={editMode ? onUpdate : onAdd}
      label={label}
      editMode={editMode}
      itemToEdit={itemToEdit}
    />
  </Modal>
};

export default NewExpense;