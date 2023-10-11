import { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';
import Table from '@/components/UI/Table';

import Card from '../UI/Card';

//@ts-ignore
const Expenses = ({ data, onDeleteExpense, onUpdateExpense }) => {
  const [filter, setFilter] = useState('2023');

  const handleChangeFilter = (e: any) => {
    setFilter(e.target.value);
  };

  //@ts-ignore
  const filteredExpenses = data.filter((expense) => expense.date ? expense.date.getFullYear().toString() === filter : expense);

  return (
    <Card className="p-4 bg-secondary mx-auto">
      <ExpensesFilter selected={filter} onChangeFilter={handleChangeFilter} />
      {/* <ExpenseChart expenses={filteredExpenses} /> */}
      <Card className="d-flex justify-content-between align-items-center p-2 my-4 bg-light">
        <Table list={filteredExpenses} deleteItem={onDeleteExpense} updateItem={onUpdateExpense} />
      </Card >
    </Card>
  );
};

export default Expenses;
