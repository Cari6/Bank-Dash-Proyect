import {
  tableExpenseData,
  tableHead,
  tableIncomeData,
  tableTransactionsData,
} from "@/src/utils/constants";
import { TransactionsTableProps } from "../types/tabs-transactions";

export const renderTable: { [key: number]: TransactionsTableProps } = {
  0: { tableHead: tableHead, tableTransactionsData: tableTransactionsData },
  1: { tableHead: tableHead, tableTransactionsData: tableIncomeData },
  2: { tableHead: tableHead, tableTransactionsData: tableExpenseData },
};

export const tabOptionsTransactions = [
  { id: 0, title: "All Transactions" },
  { id: 1, title: "Income" },
  { id: 2, title: "Expense" },
];

export const tabOptionsSetting = [
  { id: 0, title: "Edit Profile" },
  { id: 1, title: "Preferences" },
  { id: 2, title: "Security" },
];
