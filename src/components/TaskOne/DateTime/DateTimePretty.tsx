import DateTimeFormat from './DateTimeFormat';
import DateTime from '../DateTime/DateTime';
import withPrettyDate from './withPrettyDate';


/**
 * Компонент DateTimePretty с форматированной датой.
 * @returns {ComponentType} - Обернутый компонент DateTime с форматированной датой.
 */
const DateTimePretty = withPrettyDate(DateTime, DateTimeFormat);

export default DateTimePretty;