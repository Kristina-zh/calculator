import { useState, ChangeEvent } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './Chart/ExpenseChart';
import Table from '@/components/UI/Table';
import Card from '../UI/Card';
import { IExpenseData } from "@/components/Expenses/NewExpense/ExpenseForm";

interface ExpensesProps {
  data: IExpenseData[];
  onDelete: (idToDelete: string) => void;
  handleEditClick: (idToUpdate: string) => void;
}

const Expenses: React.FC<ExpensesProps> = ({ data, onDelete, handleEditClick }) => {
  const [filter, setFilter] = useState('2023');

  const handleChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filteredExpenses = data?.filter((expense) => {
    if (expense.date) {
      return expense.date.slice(0, 4) === filter;
    }
    return expense;
  });

  return (
    <Card className="p-4 bg-secondary mx-auto">
      <ExpensesFilter selected={filter} onChangeFilter={handleChangeFilter} />
      {/* <ExpenseChart expenses={filteredExpenses} /> */}
      <Card className="d-flex justify-content-between align-items-center p-2 my-4 bg-light">
        <Table list={filteredExpenses} deleteItem={onDelete} handleEditClick={handleEditClick} />
      </Card >
    </Card>
  );
};

export default Expenses;
