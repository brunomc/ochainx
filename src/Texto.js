import React, { PureComponent } from 'react';
import './App.css';
import validImg from './valid.png';

class Texto extends PureComponent {
  render() {
    const { manufacturer, nameProduct, productionDate, text1, link } = this.props;

    return (
      <div className="Container" >
        <h2> {manufacturer} </h2>
        <h3>  {nameProduct} </h3>
        <h4> {productionDate} </h4>
         <img  width="200px" src={validImg} alt="valid"/><br/>
        <h5>  {text1} <br/> {link}  </h5>
      </div>
    );
  }
}

export default Texto;
