import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VideoPlayer from './VideoPlayer';
import axios from 'axios';
import Texto from './Texto';
import './App.css';

const style = {
   imagem: {
       marginTop:'50%'
   }
  };

class Valida extends Component {
    constructor(props){
        super(props);
        this.state ={
            produto:{},
            procedencia:'',
        }
    }
    componentWillMount(){
        axios.get('http://ochain.herokuapp.com/api/data/product'+ this.props.location.pathname).then(res=>{
          console.log('RESULTADO: ', res);
          if(res.data.nameProduct === ""){
            this.setState({
                produto: {},
                procedencia:'Falso'
              });
          }else {
            this.setState({
                produto: res.data,
                procedencia:'Verdadeiro'
              });
          }
        }).catch(error=>{
            this.setState({
                produto: {},
                procedencia:'ERRO DE VERIFICACAO'
              });
        });
    }
    render() {
      return (
        <div>
            <VideoPlayer />
            <h1 className="procedencia">{this.state.procedencia}</h1>
            <Texto procedencia={this.state.procedencia}>
            </Texto>
       </div>
      );
    }
  }

  export default Valida;
