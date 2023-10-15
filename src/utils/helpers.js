import fs from 'fs';
import path from 'path';

export function buildIncomePath() {
  return path.join(process.cwd(), 'src', 'data', 'income.json');
}

export function buildExpensesPath() {
  return path.join(process.cwd(), 'src', 'data', 'expenses.json');
}

export function extractItems(filePath) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}