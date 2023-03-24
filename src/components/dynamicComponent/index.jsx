import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAmount } from '../../features/finance/componentsSlice';

const DynamicComponent = ({item}) => {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

    return (
    <div>
        <p>{item?.title}</p>
        <form action="">
            <input type="text" />
        </form>
    </div>
  )
}

export default DynamicComponent