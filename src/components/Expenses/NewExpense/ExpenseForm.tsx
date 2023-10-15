import { useState, ChangeEvent, FormEvent } from 'react';
import moment from 'moment';
import Input from "@/components/UI/Input";
import Checkbox from '@/components/UI/Checkbox';

interface ExpenseFormProps {
  label: string;
  onSaveExpenseData: (updatedData: IExpenseData, id?: string) => void;
  onCancel: () => void;
  editMode?: boolean;
  itemToEdit?: any
}

export interface IExpenseData {
  title: string;
  amount: number;
  date?: string;
  isRegular: boolean;
  id: string;
}

const ExpenseForm: React.FC<ExpenseFormProps> = (props) => {
  const currentDate = moment().format('YYYY-MM');

  const [enteredTitle, setEnteredTitle] = useState(props.editMode ? props.itemToEdit.title : '');
  const [enteredAmount, setEnteredAmount] = useState(props.editMode ? props.itemToEdit.amount : '');
  const [enteredDate, setEnteredDate] = useState((props.editMode && props.itemToEdit.date) ? (props.itemToEdit.date.slice(0, 7)) : currentDate);
  const [enteredIsRegular, setEnteredIsRegular] = useState(props.editMode ? props.itemToEdit.isRegular : false);

  const inputChangeHandler = (identifier: string, event: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;

    if (identifier === 'title') {
      setEnteredTitle(enteredValue);
    } else if (identifier === 'amount') {
      setEnteredAmount(enteredValue);
    } else if (identifier === 'date') {
      setEnteredDate(enteredValue);
    } else setEnteredIsRegular(!enteredIsRegular);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const expenseData: IExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: enteredIsRegular ? undefined : enteredDate,
      isRegular: enteredIsRegular,
      id: 'i' + (Math.random() * 10000000000000000000).toString(),
    };

    props.editMode ? props.onSaveExpenseData(expenseData, props.itemToEdit.id) : props.onSaveExpenseData(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate(currentDate);
    setEnteredIsRegular(false);

    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        placeholder="Title"
        type="text"
        value={enteredTitle}
        onChange={(e) => inputChangeHandler('title', e)}
      />
      <Input
        placeholder="Amount"
        type="number"
        // min="1"
        // step="1"
        value={enteredAmount}
        onChange={(e) => inputChangeHandler('amount', e)}
      />
      <Input
        placeholder="Date"
        type="month"
        // min="2023-10"
        // max="2030-10"
        value={enteredDate}
        onChange={(e) => inputChangeHandler('date', e)}
      />
      <Checkbox
        id="is-regular"
        checked={enteredIsRegular}
        onChange={(e) => inputChangeHandler('isRegular', e)}
        label={`Regular ${props.label.toLowerCase()}`}
      />
      <hr className="my-4"></hr>

      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="submit" className="btn btn-primary btn-md px-4 me-md-2">
          {props.editMode ? 'Edit ' : 'Add'} {props.label}
        </button>
        <button onClick={props.onCancel} type="button" className="btn btn-outline-secondary btn-md px-4">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
