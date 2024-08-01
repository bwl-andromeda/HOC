/**
 * Интерфейс для свойств компонента New
 * @interface PopularProps
 */
interface PopularProps {
    children: React.ReactNode;
}

/**
 * компонент для популярных компонентов
 * @param {PopularProps} props свойства компонента Popular
 * @returns {JSX.Element} возвращает JSX элемент
 */

function Popular(props: PopularProps): JSX.Element {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
}

export default Popular;