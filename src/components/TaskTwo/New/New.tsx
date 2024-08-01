/**
 * Интерфейс для свойств компонента New
 * @interface NewProps
 */
interface NewProps {
    children: React.ReactNode;
}

/**
 * компонент для видео
 * @param {NewProps} props свойства компонента New
 * @returns {JSX.Element} возвращает JSX элемент
 */

function New(props: NewProps ): JSX.Element {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
}

export default New;