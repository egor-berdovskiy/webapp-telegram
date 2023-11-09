import React, { useState, useEffect } from "react";
import { assets, animation_assets } from '../../App';

// Styles
import './SplashScreen.css';

// Components
import Sticker from "../Sticker/Sticker";

const SplashScreen = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }, []);
  
    return (
      <div className={`splash-screen ${loading ? 'active' : 'inactive'}`}>
        {loading ? <Sticker className='splash-content' animationData={animation_assets.sand_clock} width={150} height={150} loop={true} /> : null}
      </div>
    );
  };

export default SplashScreen;
