import React, { useState } from "react";

import './Balance.css';

import { assets } from '../../App';

import Button from "../Button/Button";

import { useTelegram } from '../../hooks/useTelegram';
import userService from '../../services/userService';

// this.setState({ balance: typeof response.data.balance === 'number' ? response.data.balance : 0 });
class Balance extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            balance: 0.0,
            currency: '$',
        };

        const {tg, user} = useTelegram();
        this.user = user;
        this.tg = tg;
    }

    componentDidMount () {
        // const user_id = this.user?.id;
        // userService.getUserData(user_id)
        //     .then(userData => {
        //         console.log(userData)
        //         this.setState({ balance: userData.balance });
        //     })
        //     .catch(error => {
        //         console.error('Ошибка при загрузке данных:', error);
        //     })
    }

    Get = () => {
        const user_id = this.user?.id;
        userService.getUserData(user_id)
            .then(userData => {
                console.log(userData);
                this.setState({ balance: userData.balance });
                console.log(`Баланс: ${this.balance} ${this.currency}`);
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            })
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
                <button onClick={this.Get}>Сделать запрос</button>
            </div>
        )
    };
};

export default Balance;
