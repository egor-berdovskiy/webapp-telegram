import React from "react";
import lottie from 'lottie-web';

// Styles
import './Sticker.css';

class Sticker extends React.Component {
    constructor(props) {
        super(props);
        this.containerId = `lottie-container-${Math.random().toString(36).substring(7)}`;
    }

    componentDidMount() {
        const container = document.getElementById(this.containerId);
        if (!container.hasChildNodes()) {
            lottie.loadAnimation({
                container,
                animationData: this.props.animationData,
                renderer: 'svg',
                loop: true,
                autoplay: true,
            });
        }
    }
    
    render() {
        return <div style={ {width: this.props.width, height: this.props.height} } id={this.containerId} />;
    }
}

export default Sticker;