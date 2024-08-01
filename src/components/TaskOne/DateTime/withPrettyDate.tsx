import {  FC } from 'react';

/**
 * задаём конкретный тип для возвращаемой даты
 * @type {string} data
 */
type DateTimeProps = {
    date: string;
};

/**
 * HOC, который форматирует дату с использованием указанной функции форматирования.
 * @param {ComponentType<any>} Component - Компонент, который требуется обернуть.
 * @param {Function} formatFunction - Функция для форматирования даты.
 * @returns {ComponentType<any>} - Обернутый компонент с форматированной датой.
 */
const withPrettyDate = (
    Component: FC<DateTimeProps>,
    formatFunction: (date: string) => string): FC<DateTimeProps> => {

    return (props) => {
        const date = formatFunction(props.date);
        return <Component {...props} date={date} />;
    };
};

export default withPrettyDate;