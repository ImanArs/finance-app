// react
import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
// react icons
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'
// styles
import styles from './Header.module.scss'

const Header = () => {
  const totalAmountExpense = useSelector(state => state.expense.totalAmount);
  const totalAmountIncome = useSelector(state => state.income.totalAmountIncome);

  const [ checked, setChecked ] = useState(false)


  const financeTracker = useMemo(() => { 
    if (totalAmountExpense || totalAmountIncome ) {
      if (totalAmountExpense < totalAmountIncome) {
        return <span className={styles.plus}>{-totalAmountExpense + totalAmountIncome}</span>  
      } else if (totalAmountExpense > totalAmountIncome) {
        return <span className={styles.minus}>{-totalAmountExpense + totalAmountIncome}</span>  
      }
    } else {
      return 0
    }
   },[totalAmountIncome, totalAmountExpense])

   const toggleInput = () => {
    setChecked(!checked)
   }
   console.log(checked);
  return (
    <header>
      <p>ваш счет : {financeTracker}</p>
      <input type="checkbox" name="themeInput" id="themeInput" onClick={toggleInput} />
      {
        checked ?
        <label htmlFor="themeInput"><BsFillSunFill /></label>
        :
        <label htmlFor="themeInput"><BsFillMoonStarsFill /></label>
      }
    </header>
  )
}

export default Header