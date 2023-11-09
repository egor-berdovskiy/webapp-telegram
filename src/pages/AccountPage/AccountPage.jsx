import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { animation_assets } from '../../App';

import { useTelegram } from '../../hooks/useTelegram';

import './AccountPage.css';

import Sticker from '../../components/Sticker/Sticker';


const AccountPage = () => {
    const nav = useNavigate();
    const { tg } = useTelegram();

    useEffect(() => {
        tg.BackButton.onClick(() => { nav('/') })
            .show()

        tg.MainButton.setParams({ text: 'Назад' })
            .onClick(() => { nav('/') })
            .show();
    }, [])

    return(
        <div className="account-page">
            <div className='sticker-holder'>
                <Sticker animationData={animation_assets.card} width={130} height={130} loop={false} />
            </div>
            <h1 className='colored-text text-center'>Информация о аккаунте</h1>
            <code>
                <p>@{tg.initDataUnsafe.user.username}</p>
            </code>
        </div>
    );
};

export default AccountPage