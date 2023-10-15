import { useState, useEffect, FormEvent, ChangeEvent  } from 'react';
import Image from 'next/image';
import Input from '../UI/Input';

import { IExpenseData } from '../Expenses/NewExpense/ExpenseForm';

const Goal: React.FC = () => {
  const [currentSavings, setCurrentSavings] = useState<number>(0);
  const [amountToCalculate, setAmountToCalculate] = useState<number>(0);
  const [calculatedDate, setCalculatedDate] = useState<string>('');
  const [expensesData, setExpenses] = useState<IExpenseData[]>([]);
  const [incomeData, setIncome] = useState<IExpenseData[]>([]);

  useEffect(() => {
    fetch(`/api/expenses`).then(res => res.json()).then(data => setExpenses(data.expenses))
  }, []);

  useEffect(() => {
    fetch(`/api/income`).then(res => res.json()).then(data => setIncome(data.income))
  }, []);

  const handleCalculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const targetAmount = currentSavings + amountToCalculate;
    const savingDate = calculateSavingDate(targetAmount, incomeData, expensesData);
    const formattedDate = savingDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

    setCalculatedDate(formattedDate);
  };

  const calculateSavingDate = (targetAmount: number, incomeData: IExpenseData[], expenseData: IExpenseData[]) => {
    let currentDate = new Date();
    let currentBalance = currentSavings;

    while (currentBalance < targetAmount) {
      const incomeForMonth = incomeData
        .filter((item) => item.isRegular)
        .reduce((total, item) => total + item.amount, 0);

      const expensesForMonth = expenseData
        .filter((item) => item.isRegular)
        .reduce((total, item) => total + item.amount, 0);

      currentBalance += incomeForMonth - expensesForMonth;

      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return currentDate;
  };

  return (
    <section className="container h-screen flex items-center col-xxl-8" style={{ position: "absolute", left: '50%', transform: "translateX(-50%)", maxWidth: "800px" }}>
      <div className="row mt-[-40px] h-screen flex-lg-row-reverse align-items-center py-5">
        <div className="col-10 col-sm-8 col-lg-6 rounded-3 overflow-hidden" style={{ position: "relative", height: '500px' }}>
          <Image
            src="/investmengts.jpg"
            className="d-block mx-lg-auto"
            alt="Goal image"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary h-auto" onSubmit={handleCalculate}>
            <Input placeholder="Current savings" type="number" value={currentSavings.toString()} onChange={(e: ChangeEvent<HTMLInputElement>) => setCurrentSavings(Number(e.target.value))} />
            <Input placeholder="Amount to calculate" type="number" value={amountToCalculate.toString()} onChange={(e: ChangeEvent<HTMLInputElement>) => setAmountToCalculate(Number(e.target.value))} />
            <button className="mt-3 w-100 btn btn-md btn-primary" type="submit">Calculate</button>
            <hr className="my-4" />
            <small className="text-body-secondary">Date: <span className="text-black text-bold">{calculatedDate}</span></small>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Goal;
