import React, { PureComponent } from 'react';
import './App.css';
import validImg from './valid.png';
import fakeImg from './fake.gif';

class Texto extends PureComponent {
  constructor(props){
      super(props);
      this.state = {
          manufacturer: "",
          nameProduct: "",
          productionDate: "",
          imge: '',
          text1:"",
          link: "",
      }
  }
  render() {
      const result = () => {
      if( this.props.procedencia === "Verdadeiro"){
        this.setState({
          manufacturer: "Aurora",
          nameProduct: "Cerveja Artesanal",
          productionDate: "08/08/2018",
          imge: validImg,
          text1:"Link do registro na blockchain:",
          link: "https://etherscan.io"
          });
      }
      else {
        this.setState({
          manufacturer: "Produto falsificado",
          nameProduct: "",
          productionDate: "",
          imge: fakeImg,
          text1:"Entre em contato com o vendedor do produto.",
          link: "",
          });
      }
};
    return (
      result(),
      <div className="Container" >
          <h2> {this.state.manufacturer} </h2>
          <h3>  {this.state.nameProduct} </h3>
          <h4> {this.state.productionDate} </h4>
           <img  width="200px" src={this.state.imge} alt="imagem"/><br/>
          <h5>  {this.state.text1} <br/> {this.state.link}  </h5>
      </div>
    );
  }
}

export default Texto;
