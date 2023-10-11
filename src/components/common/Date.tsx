//@ts-ignore
export const Date = ({date}) => {
  const month = date.toLocaleString('en-us', { month: '2-digit' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-us', { day: '2-digit' });

  return (
    <div className="d-flex gap-2">
      <p className="expense-date__day ">{day}</p>
      <p className="expense-date__month">{month}</p>
      <p className="expense-date__year">{year}</p>
    </div>
  );
};
