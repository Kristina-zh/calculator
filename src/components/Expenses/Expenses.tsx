import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './Chart/ExpenseChart';
import Table from '@/components/UI/Table';
import Card from '../UI/Card';
import { IExpenseData } from "@/components/Expenses/NewExpense/ExpenseForm";

interface ExpensesProps {
  data: IExpenseData[];
  onDelete: (idToDelete: string) => void;
  onUpdate: (idToUpdate: string, updatedData: IExpenseData) => void;
}

const Expenses: React.FC<ExpensesProps> = ({ data, onDelete, onUpdate }) => {
  const [filter, setFilter] = useState('2023');

  const handleChangeFilter = (e: any) => {
    setFilter(e.target.value);
  };

  const filteredExpenses = data.filter((expense) => {
    if (expense.date) {
      return expense.date.getFullYear().toString() === filter;
    }
    return false;
  });

  return (
    <Card className="p-4 bg-secondary mx-auto">
      <ExpensesFilter selected={filter} onChangeFilter={handleChangeFilter} />
      {/* <ExpenseChart expenses={filteredExpenses} /> */}
      <Card className="d-flex justify-content-between align-items-center p-2 my-4 bg-light">
        <Table list={filteredExpenses} deleteItem={onDelete} updateItem={onUpdate} />
      </Card >
    </Card>
  );
};

export default Expenses;
