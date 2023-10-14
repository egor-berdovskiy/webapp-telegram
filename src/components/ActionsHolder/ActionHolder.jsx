import React from "react";

import './ActionHolder.css'

import Button from "../Button/Button";

import { assets } from '../../App';

class ActionsHolder extends React.Component {
    render() {
        return(
            <div className="actions-holder">
                <Button text='Перевести' img={assets.send} link='#' />
                <Button text='Получить' img={assets.receive} link='#' />
                <Button text='Счёт' img={assets.account_settings} link='#' />
            </div>
        )
    };
};

export default ActionsHolder;
