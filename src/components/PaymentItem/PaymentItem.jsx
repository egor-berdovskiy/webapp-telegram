import React, { useEffect } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';

import { animation_assets } from '../../App';

import './PaymentItem.css';

// Hooks
import { useTelegram } from '../../hooks/useTelegram';

const PaymentItem = ({ data }) => {
    const { tg, user, onToggleBackButton, onToggleMainButton } = useTelegram();

    const mainButtonClick = () => {
        console.log('Main button click!')
        tg.openInvoice()
    }

    const paymentItemClick = (variant_id) => { 
        tg.MainButton.show()
            .setParams({
                text: 'Перейти к оплате',
            })
            .onClick(mainButtonClick)

        console.info(`[${variant_id}] CLICK!`)
    }

    return(
        <div className={`payment-item shadow-light`} data-payment={data.id}>
            
            <label for={data.id} onClick={() => paymentItemClick(data.id)}>
                <div className='payment-icon'></div>
                <div className='payment-content'>
                    <p className='payment-title'>{data.title}
                        <span className='payment-arrow'>
                            <input type='radio' name='payment-group' className='hidden-radio' id={data.id}></input>
                        </span>
                    </p>
                </div>
            </label>
        </div>
    );
};

export default PaymentItem;
