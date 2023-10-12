import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Expenses from '@/components/Expenses/Expenses';
import NewExpense from "@/components/Expenses/NewExpense/NewExpense";
import { IExpenseEnteredData, IExpenseData } from "@/components/Expenses/NewExpense/ExpenseForm";

//TODO: get data from mongoDB
import { income as initialIncome } from '../utils/income';

const Income = () => {
  const [income, setIncome] = useState(initialIncome);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addExpenseHandler = (enteredData: IExpenseEnteredData) => {
    const incomeData = {
      ...enteredData,
      id: 'i' + Math.random().toString(),
    };

    fetch('/api/income', {
      method: 'POST',
      body: JSON.stringify(incomeData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // setIncome((prevState) => [incomeData, ...prevState]);
  };

  const updateExpenseHandler = (idToUpdate: string, updatedData: IExpenseData) => {
    const indexToUpdate = income.findIndex((incomeData) => incomeData.id === idToUpdate);

    if (indexToUpdate !== -1) {
      const updatedIncome = [...income];
      updatedIncome[indexToUpdate] = updatedData;
      setIncome(updatedIncome);
    }
  };

  const deleteExpenseHandler = (idToDelete: string) => {
    const updatedIncome = income.filter((incomeData) => incomeData.id !== idToDelete);
    setIncome(updatedIncome);
  };

  return (
    <section>
      <Button variant="primary my-5" onClick={handleShow}>
        Add New Income
      </Button>
      {show && <NewExpense handleClose={handleClose} onAdd={addExpenseHandler} label="Income" />}
      <Expenses data={income} onDelete={deleteExpenseHandler} onUpdate={updateExpenseHandler} />
    </section>
  );
}

export default Income;