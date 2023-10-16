import React, { useEffect, useState } from 'react';

import logo from './logo.svg';

// Components
import MainBlock from './components/MainBlock/MainBlock';
import SplashScreen from './components/SplashScreen/SplashScreen';

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

// Stickers data
import sand_clock from './images/stickers/data/sand_clock.json';
import bulb from './images/stickers/data/bulb.json';

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
}

const animation_assets = {
  sand_clock,
  bulb,
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className='App'>
        <SplashScreen />
        <MainBlock />
      </div>
    )
  }
}

export default App;
export { assets, animation_assets };
