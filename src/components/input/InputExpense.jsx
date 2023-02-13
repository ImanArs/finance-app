import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from '../../features/finance/expenseSlice';

const InputExpense = () => {
const expenses = useSelector(state => state.expense.expenses);
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addExpense({
        description,
        amount: parseFloat(amount)
      })
    );
    setDescription('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default InputExpense;