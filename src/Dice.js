import React, { Component } from "react";
import './Dice.css'

class Dice extends Component {
  render() {
    return <i className={`fa fa-dice-${this.props.face} Die ${this.props.rolling ? 'shaking': ''}`}/>;
  }
}

export default Dice;
