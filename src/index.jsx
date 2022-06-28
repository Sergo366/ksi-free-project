import React from 'react';
import {render} from "react-dom";
import './styles/styles.css'
import './styles/style2.scss'
import {tsInfo} from "./ts";

class General {
    constructor(name, years) {
        this.name = name
        this.years = years
    }

    sayHello = () => {
        console.log(`Hello ${this.name}`)
    }
    getYears = () => {
        console.log(this.years)
    }
}

const App = () => {

    return (
        <>
            <div>
                Hello big dicker
            </div>
            <div className="container">
                Webpack Course
            </div>
            <div className="sass"/>
        </>
    )
}

render(<App/>, document.getElementById('app'))

const general = new General('Sergei', 24)

general.getYears()
general.sayHello()

tsInfo()
