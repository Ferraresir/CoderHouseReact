import React, { useState } from 'react'
import './itemCount.scss'

const ItemCount = ({ initialValue, max, min, onAdd }) => {
    const [counter, setCounter] = useState(initialValue);


    const decrement = () => {
        if (counter === min)
            return;
        setCounter(counter - 1);
        onAdd(counter - 1)
    }

    const increment = () => {
        if (counter >= max)
            return
        setCounter(counter + 1);
        onAdd(counter + 1)
    }

    return (

        <div className="card">
            <div className="counter">
                <span onClick={decrement}>-</span>
                <span>{counter}</span>
                <span onClick={increment}>+</span></div>
        </div>
    );
}

export default ItemCount