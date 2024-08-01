import { ItemElement } from "../Props/Props";


/**
 * компонент для видео
 * @param {ItemElement[]} свойства компонента
 * @returns {JSX.Element} возвращает JSX элемент
 */

function Video(props: ItemElement): JSX.Element {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameBorder="0" title="Описание содержимого" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
}

export default Video;