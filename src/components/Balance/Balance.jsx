import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import './Balance.css';

import { assets } from '../../App';

import Button from "../Button/Button";

import { useTelegram } from '../../hooks/useTelegram';


function Balance() {
    const [state, setState] = useState({
        balance: useSelector((state) => state.bank.balance),
        currency: '$',
        debug: false,
    });

    const { tg, user } = useTelegram();
    console.log(`[${useSelector((state) => state.bank.bank_id)}] Balance: ${useSelector((state) => state.bank.balance)}` )

    return(
        <div className="balance">
            <div className="content">
                <p id="balance-text">Баланс</p>
                <div id="balance-info">
                    <p id="balance-value">{useSelector((state) => state.bank.balance)} {state.currency}</p>
                    <Button img={assets.plus_button} height={20} width={20} link='/deposit' />
                </div>
            </div>
        </div>
    )
};

export default Balance;
