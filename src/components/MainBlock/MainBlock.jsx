import React from "react";

import './MainBlock.css';

import ActionsHolder from "../ActionsHolder/ActionHolder";
import Balance from '../Balance/Balance';

import { assets } from '../../App';

class MainBlock extends React.Component {
    render() {
        return(
            <div className="main-block shadow">
                <Balance />
                <ActionsHolder />
            </div>
        )
    };
};

export default MainBlock;
