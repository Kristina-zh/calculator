import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import Expenses from '@/components/Expenses/Expenses';
import NewExpense from "@/components/Expenses/NewExpense/NewExpense";
import { IExpenseData } from "@/components/Expenses/NewExpense/ExpenseForm";

interface ExpenseTemplateProps {
  pageType: string;
}

const ExpenseTemplate: React.FC<ExpenseTemplateProps> = ({ pageType }) => {
  const [expenses, setExpenses] = useState<IExpenseData[]>([]);
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [itemToEdit, setItemToEdit] = useState<IExpenseData | null>(null);

  useEffect(() => {
    fetch(`/api/${pageType}`).then(res => res.json()).then(data => setExpenses(data[pageType]))
  }, [pageType]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditClick = (id: string) => {
    const item = expenses.find((item) => item.id === id);
    if (item) {
      setItemToEdit(item);
      setEditMode(true);
    }
    handleShow();
  };

  const closeEditModal = () => {
    setItemToEdit(null);
    setEditMode(false);
    handleClose();
  };

  const addExpenseHandler = (enteredData: IExpenseData) => {
    fetch(`/api/${pageType}`, {
      method: 'POST',
      body: JSON.stringify(enteredData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json()).then(data => setExpenses(data.data))
  };

  const updateExpenseHandler = (updatedData: IExpenseData, id?: string) => {
    const indexToUpdate = expenses.findIndex((item) => item.id === id);

    if (indexToUpdate !== -1) {
      const updatedExpenses = [...expenses];
      updatedExpenses[indexToUpdate] = updatedData;
      setExpenses(updatedExpenses);

      fetch(`/api/${pageType}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedData),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.ok) {
          console.error('Success!');
        } else {
          console.error('Error occurred while updating item on the server');
        }
      })
    }
  };

  const deleteExpenseHandler = (id: string) => {
    fetch(`/api/${pageType}/${id}`, {
      method: 'DELETE'
    }).then((res) => {
      if (res.ok) {
        const updatedItem = expenses.filter((item) => item.id !== id);
        setExpenses(updatedItem);
      } else {
        console.error('Error occurred while deleting item');
      }
    })
  };

  const label = pageType === 'income' ? 'Income' : 'Expense'

  return (
    <section>
      <Button variant="primary my-5" onClick={handleShow}>
        Add New {label}
      </Button>
      {show && (
        <NewExpense
          handleClose={handleClose}
          onAdd={addExpenseHandler}
          onUpdate={updateExpenseHandler}
          label={label}
          editMode={editMode}
          //@ts-ignore
          itemToEdit={itemToEdit}
          closeEditModal={closeEditModal} />)
      }
      <Expenses
        data={expenses}
        onDelete={deleteExpenseHandler}
        handleEditClick={handleEditClick}
      />
    </section>
  );
}

export default ExpenseTemplate;