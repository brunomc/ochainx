import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


   
class Valida extends Component {
    constructor(props){
        super(props);
        this.state ={
            produto:{}
        }
    }
    componentWillMount(){
        axios.get('http://ochain.herokuapp.com/api/data/product'+ this.props.location.pathname).then(res=>{
          console.log('RESULTADO: ', res);
          this.setState({
            produto: res.data
          });

        }).catch(error=>{
            console.log("ERRO: ", error);
        });

    }
    render() {
      return (
        <div>
       <p>{JSON.stringify(this.state.produto)}</p>
       <p>qualquer coisa aqui</p>
       </div>
      );
    }
  }
  
  export default Valida;
  