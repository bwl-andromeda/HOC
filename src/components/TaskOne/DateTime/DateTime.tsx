import { FC } from "react";

/**
 * задаём конкретный тип для возвращаемой даты
 * @type {string} data
 */
export type DateTimeProps = {
    date: string;
};

/**
 * отображение даты и времени
 * @param props
 * @returns {JSX.Element} возвращаемый элемент
 */
const DateTime: FC<DateTimeProps> = ({date}): JSX.Element => {
    return (
        <p className="date">{date}</p>
    );
}

export default DateTime;