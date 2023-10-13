import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Expenses from '@/components/Expenses/Expenses';
import NewExpense from "@/components/Expenses/NewExpense/NewExpense";
import { IExpenseEnteredData, IExpenseData } from "@/components/Expenses/NewExpense/ExpenseForm";

//TODO: get data from mongoDB
import { expenses as initialExpenses } from '../utils/expences';

const Income = () => {
const [expenses, setExpenses] = useState(initialExpenses);
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addExpenseHandler = (enteredData: IExpenseEnteredData) => {
    const expenseData = {
      ...enteredData,
      id: 'e' + Math.random().toString(),
    };
    setExpenses((prevState) => [expenseData, ...prevState]);
  };

  const updateExpenseHandler = (idToUpdate: string, updatedData: IExpenseData) => {
    const indexToUpdate = expenses.findIndex((expenseData) => expenseData.id === idToUpdate);

    if (indexToUpdate !== -1) {
      const updatedExpenses = [...expenses];
      updatedExpenses[indexToUpdate] = updatedData;
      setExpenses(updatedExpenses);
    }
  };

  const deleteExpenseHandler = (idToDelete: string) => {
    const updatedExpenses = expenses.filter((expenseData) => expenseData.id !== idToDelete);
    setExpenses(updatedExpenses);
  };

  return (
    <section>
      <Button variant="primary my-5" onClick={handleShow}>
        Add New Expense
      </Button>
      {show && <NewExpense handleClose={handleClose} onAdd={addExpenseHandler} label="Expense" />}
      <Expenses data={expenses} onDelete={deleteExpenseHandler} onUpdate={updateExpenseHandler} />
    </section>
  );
}

export default Income;