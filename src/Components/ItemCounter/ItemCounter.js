import { useState } from 'react'

const ItemCounter = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
        setCount (count + 1)
    }}

    const reset = () => {
        setCount(initial)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => increment()}>Sumar Clic</button>
            <button onClick={() => reset()}>reset</button>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    )

}

export default ItemCounter