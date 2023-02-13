import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addIncome } from '../../features/finance/incomeSlice';

const InputIncome = () => {
    const dispatch = useDispatch();
    const [amountIncome, setAmountIncome] = useState()
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
          addIncome({
            description,
            amount: parseFloat(amountIncome)
          })
        );
        setDescription('');
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
      <button type="submit">Add штсщьу</button>
    </form>
  );
}

export default InputIncome