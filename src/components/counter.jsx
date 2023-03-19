import React, { useState } from "react";

// ДОЧЕРНИЙ КОМПОНЕНТ не должен иметь свой стейт, он должен его получать от родителя, это называется управляемый компонент
const Counter = (props) => {
    // console.log(props)
    // деструктуризаировали объект пропс
    const { value } = props
    console.log(value)

    const formatValue = () => {
        return value === 0 ? "empty" : value
    }
    // делаем смену вида кнопки в зависимости от кол-ва count
    // добавл тот или иной класс в завис от счетчика
    const getBadgeClasses = () => {
        let classes = "badge m-2 "
        classes += value === 0 ? "text-bg-warning" : "text-bg-primary"
        return classes;
    }

    // все функ для обоработчиков событий начинаются с handle

    //если тегов нет, отрисов кнопки + и -
    return (
        <div>
            {/* // чилдрен то что внутри компоненты каунтер <h1>Счетчик</h1> */}
            <span>{props.name}</span>
            <span className={getBadgeClasses()} >{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncrement(props.id)}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(props.id)}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )
};

export default Counter



