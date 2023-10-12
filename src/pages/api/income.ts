import fs from 'fs';
import path from 'path';

import type { NextApiRequest, NextApiResponse } from 'next';
import { IExpenseData } from "@/components/Expenses/NewExpense/ExpenseForm";

type ResponseData = {
  message: string;
  newIncomeItem?: IExpenseData;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      const incomeData = req.body.expenseData;

      const newIncomeItem = {
        ...incomeData,
        id: 'i' + Math.random().toString(),
      };

      const filePath = path.join(process.cwd(), 'data', 'income.json');
      const fileDataBuffer = fs.readFileSync(filePath);
      const fileData = fileDataBuffer.toString(); 
      const data = JSON.parse(fileData);
      data.push(newIncomeItem);
      
      fs.writeFileSync(filePath, JSON.stringify(data));
      res.status(201).json({ message: 'Success!', newIncomeItem });
    } catch (error) {
      console.error('Error:', error);
      res
        .status(500)
        .json({ message: 'Error occurred while saving income data' });
    }
  }
}
