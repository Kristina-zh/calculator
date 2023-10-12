import { useState, ChangeEvent, FormEvent } from 'react';
import moment from 'moment';
import Input from "@/components/UI/Input";
import Checkbox from '@/components/UI/Checkbox';

interface ExpenseFormProps {
  label: string;
  onSaveExpenseData: (expenseData: IExpenseEnteredData) => void;
  onCancel: () => void;
}

export interface IExpenseEnteredData {
  title: string;
  amount: number;
  date?: Date;
  isRegular: boolean;
}

export interface IExpenseData extends IExpenseEnteredData {
  id: string;
}

const ExpenseForm: React.FC<ExpenseFormProps> = (props) => {
  const currentDate = moment().format('YYYY-MM');

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState(currentDate);
  const [enteredIsRegular, setEnteredIsRegular] = useState(false);

  const inputChangeHandler = (identifier: string, event: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;

    if (identifier === 'title') {
      setEnteredTitle(enteredValue);
    } else if (identifier === 'amount') {
      setEnteredAmount(enteredValue);
    } else if (identifier === 'date') {
      setEnteredDate(enteredValue);
    } else setEnteredIsRegular(Boolean(enteredValue));
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const expenseData: IExpenseEnteredData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      isRegular: enteredIsRegular
    };

    props.onSaveExpenseData(expenseData);
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
          Add {props.label}
        </button>
        <button onClick={props.onCancel} type="button" className="btn btn-outline-secondary btn-md px-4">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
