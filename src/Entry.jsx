import React from 'react';
import {render} from "react-dom";
import './styles/styles.css'
import './styles/style2.scss'

const Entry = () => {

    return (
        <>
            <div>
                Hello big dicker
            </div>
            <div className="container">
                Webpack Course 2
            </div>
            <div className="sass"/>
        </>
    )
}

render(<Entry/>, document.getElementById('app'))