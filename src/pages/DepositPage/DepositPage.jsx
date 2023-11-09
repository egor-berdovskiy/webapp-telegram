import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { animation_assets } from '../../App';

import './DepositPage.css';

// Hooks
import { useTelegram } from '../../hooks/useTelegram';

// Components
import Sticker from '../../components/Sticker/Sticker';
import PaymentVariantHolder from '../../hoc/PaymentVariantHolder/PaymentVariantHolder';
import PaymentItem from '../../components/PaymentItem/PaymentItem';


const DepositPage = () => {
    const { tg, user, onToggleBackButton, onToggleMainButton } = useTelegram();
    const nav = useNavigate();

    useEffect(() => {
        tg.ready();
        tg.BackButton.show();
        tg.BackButton.onClick(() => { nav("/"); tg.BackButton.hide(); })
    }, [])

    return(
        <div id='deposit-page'>
            <div>
                <div className='sticker-holder'>
                    <Sticker animationData={animation_assets.money_bag} width={130} height={130} loop={false} />
                </div>
                <div className='title-holder'>
                    <h1>Выберите способ оплаты</h1>
                </div>
            </div>
            <PaymentVariantHolder>
                <PaymentItem data={{title: 'Тестовый вариант оплаты', id: 0}}/>
                <PaymentItem data={{title: 'Банковская карта', id: 1}}/>
                <PaymentItem data={{title: 'Криптовалюта', id: 2}}/>
            </PaymentVariantHolder>
        </div>
    );
};

export default DepositPage;
