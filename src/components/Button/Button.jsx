import React from "react";

import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return(
            <div className="button">
                <a href={this.props.link}>
                    { this.props.img ? <img src={this.props.img} width={this.props.width} height={this.props.height}></img> : null }
                    { this.props.text ? <p className="colored-text">{ this.props.text }</p> : null }
                </a>
            </div>
        )
    };
};

export default Button;
