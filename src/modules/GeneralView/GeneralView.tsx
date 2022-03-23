import React, {FC} from 'react';
import {Header} from "./Header";
import {Navigation} from "./Navigation";
import classes from './styles/style.module.css';
import {PaddingBox} from "../../components/PaddingBox";

export const GeneralView: FC = (
    {
        children,
    }
) => {
    return (
        <div className={classes.generalView}>
            <Navigation className={classes.navigation}/>
            <Header className={classes.header} />
            <PaddingBox normal className={classes.content}>
                {children}
            </PaddingBox>
        </div>
    );
};