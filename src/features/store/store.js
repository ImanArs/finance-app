import { configureStore } from "@reduxjs/toolkit";
import componentsSlice from "../finance/componentsSlice";
import expenseSlice from '../finance/expenseSlice'
import incomeSlice from "../finance/incomeSlice";

export const store = configureStore({
    reducer: {
        expense: expenseSlice,
        income: incomeSlice,
        components: componentsSlice,
    }
})  