import Select from '@/components/UI/Select'

//@ts-ignore
const ExpensesFilter = ({ selected, onChangeFilter }) => {
  return (
    <div className="container">
      <Select selected={selected} onChangeFilter={onChangeFilter} />
    </div>
  );
};

export default ExpensesFilter
