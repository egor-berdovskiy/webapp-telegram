import React from "react";

import './Balance.css';

import { assets } from '../../App';

import Button from "../Button/Button";

class Balance extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            balance: 0.0,
            currency: '$',
        };
    }

    componentDidMount () {
        
    }

    render() {
        return(
            <div className="balance">
                <div className="content">
                    <p id="balance-text">Баланс</p>
                    <div id="balance-info">
                        <p id="balance-value">{this.state.balance} {this.state.currency}</p>
                        <Button img={assets.plus_button} height={20} width={20} link='https://ya.ru' />
                    </div>
                </div>
            </div>
        )
    };
};

export default Balance;
