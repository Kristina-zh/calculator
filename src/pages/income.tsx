import { useState } from 'react';

import Expenses from '@/components/Expenses/Expenses';
import Modal from "@/components/Expenses/NewExpense";

import Button from 'react-bootstrap/Button';

import { income as initialIncome } from '../utils/income';

const Income = () => {
  const [income, setIncome] = useState(initialIncome);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //@ts-ignore
  const saveExpenseDataHandler = (enteredIncomeData) => {
    const incomeData = {
      ...enteredIncomeData,
      id: Math.random().toString(),
    };
    setIncome((prevState) => [incomeData, ...prevState]);
  };

  return (
    <>
      <Button variant="primary my-5" onClick={handleShow}>
        Add New Income
      </Button>
      <Modal handleClose={handleClose} saveExpenseDataHandler={saveExpenseDataHandler} show={show} label="Income" />
      <Expenses data={income} onDeleteExpense={() => {}} onUpdateExpense={() => {}} />
    </>
  );
}

export default Income;