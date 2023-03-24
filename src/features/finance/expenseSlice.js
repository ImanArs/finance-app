import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {  
    expenses: [],
    totalAmount: 0
};

export const addExpense = createAsyncThunk(
  'expense/addExpense',
  async (expense, { getState, dispatch }) => {
    const currentExpenses = getState().expense.expenses;
    const newExpenses = [...currentExpenses, expense];
      console.log(newExpenses, "exp");
    return newExpenses;
  }
);


  const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {},
    extraReducers: {
      [addExpense.fulfilled]: (state, action) => {
        state.expenses = action.payload;
        state.totalAmount = state.expenses.reduce((acc, expense) => acc + expense.amount, 0);
      }
    }
  });

export default expenseSlice.reducer;
