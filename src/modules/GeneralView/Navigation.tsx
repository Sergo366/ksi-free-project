import React, {FC} from 'react';
import classNames from 'classnames';
import baseClasses from './styles/style.module.css';
import classes from './styles/navigation.module.css';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import {FlexGrid} from "../../components/FlexGrid";
import {PaddingBox} from "../../components/PaddingBox";

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
        baseClasses.navigation,
        classes.navItems
    )

    return (
        <Router>
            <PaddingBox small>
                <FlexGrid column className={classesNavigation}>
                    <Link to={'./'}>Movie</Link>
                    <Link to={'./'}>Series</Link>
                    <Link to={'./'}>Cartoon</Link>
                </FlexGrid>
            </PaddingBox>
        </Router>
    );
};