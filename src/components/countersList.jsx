import React, { useState } from "react";
import Counter from "./counter"

// КОМПОНЕНТ -РОДИТЕЛЬ
const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "ненужная вещь", price: "200" },
        { id: 1, value: 0, name: "ложка" },
        { id: 2, value: 0, name: "вилка" },
        { id: 3, value: 0, name: "набор минималиста" }]

    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounters = counters.filter((counter) => counter.id !== id)
        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    const handleIncrement = (id) => {
        let newCounters = counters.map(counter => {
            if (counter.id === id) {
                counter.value += 1
                return counter
            }
            return counter
        })
        setCounters(newCounters)
    }

    const handleDecrement = (id) => {
        let newCounters = counters.map(counter => {
            if (counter.id === id) {
                counter.value -= 1
                return counter
            }
            return counter
        })
        setCounters(newCounters)
    }

    return (
        <>
            {counters.map((count) => (
                // {...count} спредом мы передали все поля объекта каунтер
                <Counter key={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count}>
                </Counter>
                // <Counter key={count.id} id={count.id} value={count.value} name={count.name} onDelete={handleDelete}>
                // </Counter >
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>reset</button>
            {/* <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>обновить состояние</button> */}
        </>
    )
}

export default CountersList

// если в компонент Counter нам нужно передать не только значения, а еще и дочерний компонент, надо воспользоваться children
// в CountersList:
// <Counter key={count.id} onDelete={handleDelete} {...count}><h1>это children</h1></Counter>
// в Counter:
// return(
//     {props.children}
// )