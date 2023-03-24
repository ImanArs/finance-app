import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addIncome } from '../../features/finance/incomeSlice';

const InputIncome = () => {
    const dispatch = useDispatch();
    const [amountIncome, setAmountIncome] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
          addIncome({
            amount: parseFloat(amountIncome)
          })
        );
        setAmountIncome(0);
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="amount"
        value={amountIncome}
        onChange={(e) => setAmountIncome(e.target.value)}
      />
      <button type="submit" className=''>Add income</button>
    </form>
  );
}

export default InputIncome