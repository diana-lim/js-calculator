import React, { Component } from 'react'

export class Calculator extends Component {
    render() {
        return (
            <div>
                <h1>Calculator</h1>
                <textarea id="display"></textarea>
                <div className="row-one">
                    <button id="clear">A/C</button>
                    <button id="negative">+/-</button>
                    <button id="percent"> % </button>
                    <button id="divide"> / </button>
                </div>
                <div className="row-two">
                    <button id="seven">7</button>
                    <button id="eight">8</button>
                    <button id="nine"> 9 </button>
                    <button id="multiply"> X </button>
                </div>
                <div className="row-three">
                    <button id="four">4</button>
                    <button id="five">5</button>
                    <button id="six"> 6 </button>
                    <button id="subtract"> - </button>
                </div>
                <div className="row-four">
                    <button id="one">1</button>
                    <button id="two">2</button>
                    <button id="three"> 3 </button>
                    <button id="add"> + </button>
                </div>
                <div className="row-one">
                    <button id="zero">0</button>
                    <button id="decimal">.</button>
                    <button id="equals"> = </button>
                </div>
            </div>
        )
    }
}

export default Calculator
