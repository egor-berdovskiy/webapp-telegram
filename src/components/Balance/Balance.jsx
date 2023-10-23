import React, { useState, useEffect } from "react";

import './Balance.css';

import { assets } from '../../App';

import Button from "../Button/Button";

import { useTelegram } from '../../hooks/useTelegram';
import userService from '../../services/userService';


function Balance() {
    const [state, setState] = useState({
        balance: 0.0,
        currency: '$',
        debug: true,
    });

    const { tg, user } = useTelegram();

    useEffect(() => {
        const user_id = user?.id;
        userService.getUserData(user_id)
            .then(userData => {
                console.log(userData)
                setState({ balance: userData.balance });
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            })
    }, [user?.id]);

    const Get = () => {
        const user_id = user?.id;
        userService.getUserData(user_id)
            .then(userData => {
                console.log(userData);
                setState({ balance: userData.balance });
                console.log(`Баланс: ${state.balance} ${state.currency}`);
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            })
    };

    return(
        <div className="balance">
            <div className="content">
                <p id="balance-text">Баланс</p>
                <div id="balance-info">
                    <p id="balance-value">{state.balance} {state.currency}</p>
                    <Button img={assets.plus_button} height={20} width={20} link='https://ya.ru' />
                </div>
            </div>
            { state.debug ? <button onClick={Get}>Сделать запрос</button> : null }
        </div>
    )
};

export default Balance;
