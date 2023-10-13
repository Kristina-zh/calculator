import Modal from '@/components/UI/Modal';
import ExpenseForm from './ExpenseForm';
import { IExpenseEnteredData } from "@/components/Expenses/NewExpense/ExpenseForm";

interface NewExpenseProps {
  label: string;
  handleClose: () => void;
  onAdd: (expenseData: IExpenseEnteredData) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({ handleClose, onAdd, label }) => {
  return <Modal handleClose={handleClose}>
    <ExpenseForm onCancel={handleClose} onSaveExpenseData={onAdd} label={label} />
  </Modal>
};

export default NewExpense;