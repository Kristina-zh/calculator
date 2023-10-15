import fs from 'fs';

import type { NextApiRequest, NextApiResponse } from 'next';

import { buildIncomePath, extractItems } from '@/utils/helpers';
import { IExpenseData } from '@/components/Expenses/NewExpense/ExpenseForm';

type ResponseData = {
  message?: string;
  newIncomeItem?: any;
  income?: IExpenseData[];
  data?: IExpenseData;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const filePath = buildIncomePath();
  const data = extractItems(filePath);

  if (req.method === 'POST') {
    try {
      const incomeData = req.body;

      data.push(incomeData);

      fs.writeFileSync(filePath, JSON.stringify(data));
      res.status(201).json({ message: 'Success!', data });
    } catch (error) {
      console.error('Error:', error);
      res
        .status(500)
        .json({ message: 'Error occurred while saving income data' });
    }
  } else {
    res.status(200).json({ income: data });
  }
}
