/**
 * функция смены формата даты
 * @param {string} date - дата до форматирования
 * @returns {string} отформатированная дата по условиям задания
 */
function DateTimeFormat(date: string): string {
    const currentDate: Date = new Date();
    const providedDate: Date = new Date(date);
    const timeDifference: number = currentDate.getTime() - providedDate.getTime();
    const secondsDifference: number = Math.floor(timeDifference / 1000);
    const minutesDifference: number = Math.floor(secondsDifference / 60);
    const hoursDifference: number = Math.floor(minutesDifference / 60);
    const daysDifference: number = Math.floor(hoursDifference / 24);

    if (minutesDifference <= 60) {
        return `${minutesDifference} минут назад.`
    }

    if (hoursDifference < 24) {
        return `${hoursDifference} часов назад.`
    }

    return `${daysDifference} дней назад.`
}

export default DateTimeFormat;