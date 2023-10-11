import { useState } from 'react';

import Expenses from '@/components/Expenses/Expenses';
import Modal from "@/components/Expenses/NewExpense";

import Button from 'react-bootstrap/Button';

import { expenses as initialExpenses } from '../utils/expences';

function App() {
  let expenseData;
  if (typeof window !== 'undefined') {
    //@ts-ignore
    expenseData = JSON.parse(sessionStorage.getItem('expenses'));
  }
  console.log(expenseData)

  const [expenses, setExpenses] = useState(initialExpenses);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addExpenseHandler = (expense: any) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    setExpenses((prevState) => [newExpense, ...prevState]);
  };

  //@ts-ignore
  const updateExpenseHandler = (id: string, updatedItem) => {
    // Create a copy of the expenses array
    const updatedExpenses = [...expenses];

    // Find the index of the expense with the given id in the copied array
    const expenseIndex = updatedExpenses.findIndex((expense) => expense.id === id);

    if (expenseIndex !== -1) {
      // If the expense with the given id exists, update it
      updatedExpenses[expenseIndex] = {
        ...updatedExpenses[expenseIndex], // Copy existing data
        ...updatedItem, // Update with new data
      };

      // Set the state with the updated expenses array
      setExpenses(updatedExpenses);
    }
  };

  const deleteExpenseHandler = (id: string) => {
    setExpenses((prevExpenses) => prevExpenses.filter(expense => expense.id !== id));
  }

  // Saving data to session storage
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('expenses', JSON.stringify(expenses))
  }

  return (
    <>
      <Button variant="primary my-5" onClick={handleShow}>
        Add New Expense
      </Button>
      <Modal handleClose={handleClose} saveExpenseDataHandler={addExpenseHandler} show={show} label="Expense" />
      <Expenses data={expenses} onDeleteExpense={deleteExpenseHandler} onUpdateExpense={updateExpenseHandler} />
    </>
  );
}

export default App;