import React from 'react';
import Popular from "../Popular/Popular";
import New from "../New/New";
import { ItemElement } from '../Props/Props';



/**
 * HOC для добавления метки New или Popular
 * @param {React.ComponentType<ItemElement>} WrappedComponent Компонент, который нужно обернуть
 * @returns {React.ComponentType<ItemElement>} Возвращает компонент, обернутый в New или Popular в зависимости от количества просмотров
 */
function withLabel(WrappedComponent: React.ComponentType<ItemElement>) {
    return function (props: ItemElement) {
        if (props.views > 1000) {
            return (
                <Popular>
                    <WrappedComponent {...props} />
                </Popular>
            );
        } else if (props.views < 100) {
            return (
                <New>
                    <WrappedComponent {...props} />
                </New>
            );
        } else {
            return <WrappedComponent {...props} />;
        }
    };
}

export default withLabel;