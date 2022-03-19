import React, {CSSProperties, FC} from 'react';
import {GapSizes} from "./types";
import classNames from 'classnames';
//@ts-ignore
import classes from "./styles/style.module.css";

type FlexGridProps = {
    inline?: boolean;
    spaceBetween?: boolean;
    spaceAround?: boolean;
    top?: boolean;
    bottom?: boolean;
    center?: boolean;
    hrCenter?: boolean;
    wrap?: boolean;
    hrEnd?: boolean;
    hrStart?: boolean;
    column?: boolean;
    className?: string;
    dataTestId?: string;
    grow?: boolean;
    style?: CSSProperties;
    gap?: GapSizes;
}

export const FlexGrid: FC<FlexGridProps> = (
    {
        className,
        children,
        inline,
        spaceBetween,
        spaceAround,
        top,
        bottom,
        center,
        hrCenter,
        wrap,
        hrEnd,
        style,
        hrStart,
        column,
        grow,
        gap,
    }
) => {

    const componentClasses = classNames(
        classes.flexGrid,
        className,
        {
            [classes.flexGrid_inline]: inline,
            [classes.flexGrid_spaceBetween]: spaceBetween,
            [classes.flexGrid_spaceAround]: spaceAround,
            [classes.flexGrid_top]: top,
            [classes.flexGrid_bottom]: bottom,
            [classes.flexGrid_center]: center,
            [classes.flexGrid_hrCenter]: hrCenter,
            [classes.flexGrid_wrap]: wrap,
            [classes.flexGrid_hrEnd]: hrEnd,
            [classes.flexGrid_hrStart]: hrStart,
            [classes.flexGrid_column]: column,
            [classes.flexGrid_grow]: grow,
            [classes[`flexGrid__gap_${gap}`]]: typeof gap !== 'undefined',
        },
    );

    return (
        <div
            className={componentClasses}
            style={style}
        >
            {children}
        </div>
    );
};

FlexGrid.displayName = 'FlexGrid';