import { createSlice } from "@reduxjs/toolkit";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-7-2"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e10",
    description: "Another book",
    amount: 18,
    date: new Date("2022-02-18"),
  },
];

const expensesSlices = createSlice({
  name: "expenses",
  initialState: {
    expenses: !!DUMMY_EXPENSES ? DUMMY_EXPENSES : [],
  },
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random().toString();
      state.expenses.push({
        id: id,
        description: action.payload?.description,
        amount: action.payload?.amount,
        date: action.payload?.date,
      });
    },
    updateExpense: (state, action) => {
      indexOfUpdateable = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      state.expenses[indexOfUpdateable] = {
        id: action.payload.id,
        description: action.payload?.description,
        amount: action.payload?.amount,
        date: action.payload?.date,
      };
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
  },
});

export const addExpense = expensesSlices.actions.addExpense;
export const updateExpense = expensesSlices.actions.updateExpense;
export const deleteExpense = expensesSlices.actions.deleteExpense;
export default expensesSlices.reducer;
