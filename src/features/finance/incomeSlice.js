import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  incomes: [],
  totalAmountIncome: 0
};

export const addIncome = createAsyncThunk(
  'income/addIncome',
  async (income, { getState, dispatch }) => {
    const currentIncomes = getState().income.incomes;
    const newIncomes = [...currentIncomes, income];
      console.log(newIncomes);
      return newIncomes;
  }
)

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {},
  extraReducers: {
    [addIncome.fulfilled]: (state, action) => {
      state.incomes = action.payload;
      state.totalAmountIncome = state.incomes.reduce((acc, income) => acc + income.amount, 0);
    }
  }
});



export default incomeSlice.reducer;