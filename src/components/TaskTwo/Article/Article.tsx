import { ItemElement } from "../Props/Props";


/**
 * компонент для видео
 * @param {ItemElement[]} свойства компонента
 * @returns {JSX.Element} возвращает JSX элемент
 */

function Article(props: ItemElement): JSX.Element {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
}

export default Article;