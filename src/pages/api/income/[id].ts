import fs from 'fs';

import type { NextApiRequest, NextApiResponse } from 'next';

import { buildIncomePath, extractItems } from '@/utils/helpers';
import { IExpenseData } from '@/components/Expenses/NewExpense/ExpenseForm';

type ResponseData = {
  message?: string;
  newIncomeItem?: any;
  updatedIncomeItem?: any;
  income?: IExpenseData[]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const filePath = buildIncomePath();
  const data = extractItems(filePath);

  if (req.method === 'PUT') {
    const { id } = req.query;

    if (id) {
      const index = data.findIndex((item: IExpenseData) => item.id === id);

      if (index !== -1) {
        const updatedData = req.body;
        data[index] = { ...data[index], ...updatedData };
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(200).json({ message: 'Item updated successfully', updatedIncomeItem: data[index] });
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
    } else {
      res.status(400).json({ message: 'Invalid request: Missing item ID' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;

    if (id) {
      const index = data.findIndex((item: IExpenseData) => item.id === id);

      if (index !== -1) {
        data.splice(index, 1);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(200).json({ message: 'Item deleted successfully' });
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
    } else {
      res.status(400).json({ message: 'Invalid request: Missing item ID' });
    }
  } else {
    res.status(200).json({ income: data });
  }
}