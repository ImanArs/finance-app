import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from '../finance/expenseSlice'
import incomeSlice from "../finance/incomeSlice";

export const store = configureStore({
    reducer: {
        expense: expenseSlice,
        income: incomeSlice,
    }
})
// export const store = configureStore({
//     reducer: {
//         finances: financeSlice
//     }
// })