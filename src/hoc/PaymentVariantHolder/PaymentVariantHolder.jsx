import React from "react";

import './PaymentVariantHolder.css';


const PaymentVariantHolder = (props) => {    
    return(
        <div id="payment-variant-holder">
            {props.children}
        </div>
    );
}

export default PaymentVariantHolder;
