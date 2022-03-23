import React, {FC} from 'react';
import classNames from 'classnames';
import classes from './styles/style.module.css';

type NavigationProps = {
    className: string;
}

export const Navigation:FC<NavigationProps> = (
    {
        className,
    }
) => {
    const classesNavigation = classNames(
        className,
        classes.navigation,

    )

    return (
        <div className={classesNavigation}>
            Navigation
        </div>
    );
};