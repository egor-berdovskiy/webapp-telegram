import React, { useState, useEffect } from "react";
import { assets } from '../../App';

// Styles
import './TransactionItem.css';


const TransactionItem = ({ data }) => {
    const is_receiver = null;

	const transactionTypeImage = {
        gift: assets.gift,
        transfer: assets.refresh,
    }

    const transactionStatusType = {

    }

    const transactionType = {
        gift: 'Подарок',
        transfer: 'Перевод',
    }

    const transaction = {
        
    }
    
    return (
        <div className="transaction-item" data-transactionId={data.id}>
            <div className="item-img-holder">
                <img className="item-img" src={transactionTypeImage[data.transaction_type.name]}></img>
            </div>
            <div className="item-title">
                <span>{transactionType[data.transaction_type.name]}</span>
            </div>
            <div className="title-amount-plus">
                <span>{data.amount} $</span>
            </div>
            <div className="item-description">
                <p>{data.description}</p>
            </div>
        </div>
	);
};

export default TransactionItem;
