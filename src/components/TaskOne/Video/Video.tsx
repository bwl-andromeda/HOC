import DateTimePretty from '../DateTime/DateTimePretty';
import './Video.css';

/**
 * Интерфейс свойств компонента Video.
 */
interface VideoProps {
    url: string;
    date: string;
}
/**
 * @param {{url: string; date: string}} компоненты которые передаём и их свойства
 * @returns {JSX.Element} разметка с видео и датой
 */
function Video({ url, date }: VideoProps): JSX.Element {
    return (
        <div className="video">
            <iframe src={url} frameBorder="0" title="Описание содержимого видео" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={date} />
        </div>
    )
}

export default Video;