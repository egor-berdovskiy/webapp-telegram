import React from "react";

import './ActionHolder.css'

import Button from "../Button/Button";

import { assets } from '../../App';

class ActionsHolder extends React.Component {
    render() {
        return(
            <div className="actions-holder">
                <Button text='Перевести' img={assets.send} link='#' height={50} width={50} />
                <Button text='Получить' img={assets.receive} link='#' height={50} width={50} />
                <Button text='Счёт' img={assets.account_settings} link='#' height={50} width={50} />
            </div>
        )
    };
};

export default ActionsHolder;
