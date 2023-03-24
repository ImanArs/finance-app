import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  finances: [
    {
        id: 1,
        amount: 0,
        title: "Expense"
    },
    {
        id: 2,
        amount: 0,
        title: "Income"
    },
    {
        id: 3,
        amount: 0,
        title: "Gift"
    },
    {
        id: 4,
        amount: 0,
        title: "Transport"
    },
    {
        id: 5,
        amount: 0,
        title: "Health"
    }
  ]
}

const amountSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addAmount: (state, action) => {
      const { id, value } = action.payload;
      state.finances = state.finances.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: item.amount + value
          }
        }
        return item
      })
    },
  },
});

export const { addAmount } = amountSlice.actions;

export default amountSlice.reducer;
