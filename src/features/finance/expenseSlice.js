import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     financesIncome: [],
//     incomeTotalAmount: 0,
//     financesSpending: [],
//     spendingTotalAmount: 0
// }
const initialState = {
    expenses: [],
    totalAmount: 0
};

export const addExpense = createAsyncThunk(
  'expense/addExpense',
  async (expense, { getState, dispatch }) => {
    const currentExpenses = getState().expense.expenses;
    const newExpenses = [...currentExpenses, expense];
      console.log(newExpenses);
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

// export const financeSlice = createSlice({
//     name: 'finances',
//     initialState,
//     reducers: {
//         setFinancesIncome: (state, action) => {;
//             state.financesIncome = action.payload
//         },
//         setFinancesSpending: (state, action) => {
//             state.financesSpending = action.payload
//         }
//     }
// })

// export const { setFinancesIncome } = financeSlice.actions;
// export const { setFinancesSpending } = financeSlice.actions;
// export default financeSlice.reducer
export default expenseSlice.reducer;
