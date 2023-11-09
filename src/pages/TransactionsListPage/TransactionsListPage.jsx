import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './TransactionsListPage.css';

import { animation_assets } from '../../App';

import { useTelegram } from '../../hooks/useTelegram';

import Sticker from '../../components/Sticker/Sticker';
import RecentTransactionHolder from '../../hoc/RecentTransactionHolder/RecentTransactionHolder';
import TransactionItem from '../../components/TransactionItem/TransactionItem';


const TransactionsListPage = () => {
    const { tg, user, onToggleBackButton, onToggleMainButton } = useTelegram();
    const nav = useNavigate();
    const transactions = useSelector((state) => state.bank.transactions)

    useEffect(() => {
        tg.ready();
        tg.BackButton.show();
        tg.BackButton.onClick(() => { nav("/"); tg.BackButton.hide(); })

        tg.MainButton.setParams({
            text: 'Назад',
        })
            .show()
            .onClick(() => { nav('/') })
            
    }, [])

    return(
        <div className="transactions shadow">
            <div className='sticker-holder'>
                <Sticker animationData={animation_assets.money} width={130} height={130} loop={false} />
            </div>
            <h1 className="colored-text text-center">Транзакции</h1>
            <RecentTransactionHolder>
                {transactions.map((transaction) => (
                    <>
                        <TransactionItem data={transaction} />
                    </>
                ))}
            </RecentTransactionHolder>
        </div>
    );
};

export default TransactionsListPage;
