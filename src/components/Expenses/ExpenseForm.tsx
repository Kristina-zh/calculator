import { useState } from 'react';
import moment from 'moment';
import Input from "@/components/UI/Input";

//@ts-ignore
const ExpenseForm = (props) => {
  const currentDate = moment().format('YYYY-MM');

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState(currentDate);
  const [enteredIsRegular, setEnteredIsRegular] = useState(false);

  //@ts-ignore
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  //@ts-ignore
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  //@ts-ignore
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //@ts-ignore
  const isRegularChangeHandler = (event) => {
    setEnteredIsRegular(event.target.value);
  };

  //@ts-ignore
  const inputChangeHandler = (identifier, event) => {
    const enteredValue = event.target.value;

    if (identifier === 'title') {
      setEnteredTitle(enteredValue);
    } else if (identifier === 'amount') {
      setEnteredAmount(enteredValue);
    } else if (identifier === 'date') {
      setEnteredDate(enteredValue);
    } else setEnteredIsRegular(Boolean(enteredValue));
  };

  //@ts-ignore
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      isRegular: enteredIsRegular
    };

    console.log('expenseData', expenseData)

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        placeholder="Title"
        type="text"
        value={enteredTitle}
        onChange={(e: any) => inputChangeHandler('title', e)}
      />
      <Input
        placeholder="Amount"
        type="number"
        //@ts-ignore
        min="1"
        step="1"
        value={enteredAmount}
        onChange={(e: any) => inputChangeHandler('amount', e)}
      />
      <Input
        placeholder="Date"
        type="month"
        //@ts-ignore
        min="2023-10"
        max="2030-10"
        value={enteredDate}
        onChange={(e: any) => inputChangeHandler('date', e)}
      />
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="save-info"
          //@ts-ignore
          value={enteredIsRegular}
          onChange={(e) => inputChangeHandler('isRegular', e)} />
        <label className="form-check-label" htmlFor="save-info">Regular {props.label.toLowerCase()}</label>
      </div>
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
