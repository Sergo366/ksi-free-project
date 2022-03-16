import React, {FC} from 'react';
import {Header} from "./Header";
import {Navigation} from "./Navigation";

export const GeneralView: FC = () => {
    return (
        <>
            <Header/>
            <Navigation/>
        </>
    );
};