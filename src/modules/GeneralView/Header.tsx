import React, {FC} from 'react';
// @ts-ignore
import classes from './styles/style.module.css';
import classnames from 'classnames';
import {FlexGrid} from "../../components/FlexGrid";

type HeaderProps = {
    className: string;
}

export const Header: FC<HeaderProps> = (
    {
        className,
    }
) => {

    const classesHeader = classnames(
        className,
        classes.header,
    )

    return (
        <div className={classesHeader}>
            <FlexGrid>
                <div>

                </div>
                <div>

                </div>
            </FlexGrid>
        </div>
    );
};