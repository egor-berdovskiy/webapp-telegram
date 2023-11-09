import React from "react";

import './RecentTransactionHolder.css';


const RecentTransactionHolder = (props) => {    
    return(
        <div id="recent-transactions-holder">
            {props.children}
        </div>
    );
}

export default RecentTransactionHolder;
