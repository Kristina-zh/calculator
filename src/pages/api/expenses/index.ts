import fs from 'fs';

import type { NextApiRequest, NextApiResponse } from 'next';

import { buildExpensesPath, extractItems } from '@/utils/helpers';
import { IExpenseData } from '@/components/Expenses/NewExpense/ExpenseForm';

type ResponseData = {
  message?: string;
  newExpenseItem?: any;
  expenses?: IExpenseData[];
  data?: IExpenseData[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const filePath = buildExpensesPath();
  const data = extractItems(filePath);

  if (req.method === 'POST') {
    try {
      const expenseData = req.body;

      data.push(expenseData);

      fs.writeFileSync(filePath, JSON.stringify(data));
      res.status(201).json({ message: 'Success!', data });
    } catch (error) {
      console.error('Error:', error);
      res
        .status(500)
        .json({ message: 'Error occurred while saving expense data' });
    }
  } else {
    res.status(200).json({ expenses: data });
  }
}
