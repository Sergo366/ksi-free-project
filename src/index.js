import './styles/styles.css'

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

const general = new General('Sergei', 24)

general.getYears()
general.sayHello()