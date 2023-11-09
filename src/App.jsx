import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';

// Pages
import HomePage from './pages/HomePage/HomePage';
import DepositPage from './pages/DepositPage/DepositPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TransactionsListPage from './pages/TransactionsListPage/TransactionsListPage';
import AccountPage from './pages/AccountPage/AccountPage';

// Slices
import { setBalance, setBank, setTransactions } from './store/bankSlice';

// Components
import MainBlock from './components/MainBlock/MainBlock';
import SplashScreen from './components/SplashScreen/SplashScreen';
import RecentTransactionsBlock from './components/RecentTransactionBlock/RecentTransactionBlock'

// Services
import UserService from './services/UserService';
import TransactionService from './services/TransactionService';

// Hooks
import { useTelegram } from './hooks/useTelegram';

// Styles
import './css/main.css';

// Images
import account_settings from './images/account settings.svg'
import block from './images/block.svg'
import blue_circle from './images/blue circle.svg'
import extend from './images/extend.svg'
import plus_button from './images/plus button.svg'
import receive from './images/receive.svg'
import red_circle from './images/red circle.svg'
import see from './images/see.svg'
import send from './images/send.svg'
import settings from './images/settings.svg'
import gift from './images/gift.svg'
import refresh from './images/refresh.svg'
import info from './images/info.svg'

// Stickers data
import sand_clock from './images/stickers/data/sand_clock.json';
import bulb from './images/stickers/data/bulb.json';
import money_bag from './images/stickers/data/money_bag.json';
import money from './images/stickers/data/money.json';
import card from './images/stickers/data/card.json';

const assets = {
  account_settings,
  block,
  blue_circle,
  extend,
  plus_button,
  receive,
  red_circle,
  see,
  send,
  settings,
  gift,
  refresh,
  info,
}

const animation_assets = {
  sand_clock,
  bulb,
  money_bag,
  money,
  card,
}

const getData = (user_id, dispatch) => {
  UserService.fetchUserData(user_id)
    .then((data) => {
      console.info('Данные получены.');
      dispatch(setBalance(data.bank_account.balance));
      dispatch(setBank(data.bank_account.id));

      TransactionService.fetchAllTransactions(data.bank_account.id)
        .then((data) => {
          console.info('Траназкции успешно получены.')
          dispatch(setTransactions(data))
        })
        .catch((error) => {
          console.error('Ошибка при получении транзакций: ', error);
        })
    })
}

const App = () => {
  const { tg, user } = useTelegram();
  const dispatch = useDispatch();

  useEffect(() => {
    const user_id = user?.id;

    const user_data = {
      type: 'user',
      user_id: user.id,
      full_name: user.first_name,
      username: user.username,
      language: user.language_code,
    }
    UserService.checkUser(user_id)
      .then((user_auth) => {
        if (user_auth === true) {
          console.info('Пользователь есть, попробуем получить информацию...');
          getData(user_id, dispatch);
        } else if (user_auth === false) {
          console.info('Пользователь не найден, создадим его...');
          UserService.createUser(user_data)
            .then(() => {
              getData(user_id, dispatch);
            })
            .catch((error) => {
              console.error('Ошибка при создании пользователя: ', error);
            })
        }
      })
      .catch((error) => {
        console.error('Ошибка при получении данных: ', error);
      })

    tg.ready();
  }, [user?.id, dispatch]);

  return(
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/deposit' element={<DepositPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/transactions/list' element={<TransactionsListPage/>}/>
        <Route path='/account' element={<AccountPage/>}/>
      </Routes>
      <div className='App'></div>
    </>
  )
}

export default App;
export { assets, animation_assets };
