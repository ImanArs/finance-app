import React from 'react'
import { useSelector } from 'react-redux'
import Expense from '../components/expense/Expense'
import Gift from '../components/gifts/Gift'
import Health from '../components/health/Health'
import Income from '../components/income/Income'
import InputExpense from '../components/input/InputExpense'
import InputIncome from '../components/input/InputIncome'
import Transport from '../components/transport/Transport'

import style from './Main.module.scss'

const Main = () => {
  
const totalAmount = useSelector(state => state.expense.totalAmount);
const totalAmountIncome = useSelector(state => state.income.totalAmountIncome);
  return (
    <div>
      <section className={style.userExpense}>
        <Expense />
        <Income />
        <Gift />
        <Transport />
        <Health />
      </section>
      <section>
        <InputExpense />
        <InputIncome />
      </section>
      <section>
        <p>total expense: {totalAmount}</p>
        <p>total income: {totalAmountIncome}</p>
      </section>
    </div>
  )
}

export default Main