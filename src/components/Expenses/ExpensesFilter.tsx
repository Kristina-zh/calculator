import Select from '@/components/UI/Select';

interface ExpensesFilterProps {
  selected: string;
  onChangeFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ExpensesFilter: React.FC<ExpensesFilterProps> = ({ selected, onChangeFilter }) => {
  return (
    <div className="container">
      <Select selected={selected} onChangeFilter={onChangeFilter} />
    </div>
  );
};

export default ExpensesFilter;
