// react
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BudgetInput from '../components/budgetInput'
// components
import InputExpense from '../components/input/InputExpense'
import InputIncome from '../components/input/InputIncome'
import Modal from '../components/modal/Modal'

// style
import styles from './Main.module.scss'

const Main = () => {
  const [children, setChildren] = useState(null)
  const [modalActive, setModalActive] = useState(false);

  const totalAmountExpense = useSelector(state => state.expense.totalAmount);
  const totalAmountIncome = useSelector(state => state.income.totalAmountIncome);

  const arrCommonComponent = useSelector(state => state.components.finances)
  console.log(arrCommonComponent);
  return (
    <div>
      <h1>finance budget</h1>
      <div className={styles.amountWrapper}>
        <div>
          <h3>Plus</h3>
          <p>{totalAmountIncome}</p>
        </div>
        <div>
          <h3>Minus</h3>
          <p>{totalAmountExpense}</p>
        </div>
      </div>
      <section className={styles.userExpense}>
      {
        arrCommonComponent?.map(item => (
          <div key={item.id}>
            <button onClick={() => {
              setModalActive(true)
              // setChildren(() => item.id)
            }}>{item.title}</button>
            <p>{item.amount}</p>
            <BudgetInput id={item.id} />
          </div>
        ))
      }
        <Modal active={modalActive} setActive={setModalActive} item={children} />
      </section>
      <section className={styles.addFinance}>
        <InputExpense />
        <InputIncome />
      </section>
    </div>
  )
}

export default Main