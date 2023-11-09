import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assets } from '../../App';

import { Link } from 'react-router-dom';

// Styles
import './RecentTransactionBlock.css';

// Components
import RecentTransactionHolder from "../../hoc/RecentTransactionHolder/RecentTransactionHolder";
import TransactionItem from "../TransactionItem/TransactionItem";
import Button from "../Button/Button";


const RecentTransactionBlock = () => {
    const transactions = useSelector((state) => state.bank.transactions.slice(0, 10))  //  максимум 10 шт
    
    return(
        <div className="recent-transactions-block shadow">
            <h1 className="colored-text">Недавние операции</h1>
            <RecentTransactionHolder>
                {transactions.map((transaction) => (
                    <>
                        <TransactionItem data={transaction} />
                    </>
                ))}
                <Link to='/transactions/list/' className='colored-text text-center see-transactions'>Показать все</Link>
            </RecentTransactionHolder>
        </div>
    );
}

export default RecentTransactionBlock;
