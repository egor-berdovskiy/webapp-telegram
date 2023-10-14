import React from "react";

import './Balance.css';

import { assets } from '../../App';

class Balance extends React.Component {
    render() {
        return(
            <div className="balance">
                <p id="balance-text">Баланс</p>
                <p id="balance-value">0.0 $</p>
            </div>
        )
    };
};

export default Balance;
