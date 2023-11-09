import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { useTelegram } from '../../hooks/useTelegram';

// Components
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import MainBlock from '../../components/MainBlock/MainBlock';
import RecentTransactionsBlock from '../../components/RecentTransactionBlock/RecentTransactionBlock';


const HomePage = () => {
    const { tg } = useTelegram();
    
    useEffect(() => {
        tg.MainButton.hide();
    }, [])

    return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        <>
            {/* <SplashScreen /> */}
            <MainBlock />
            <RecentTransactionsBlock />
        </>
    );
};

export default HomePage;