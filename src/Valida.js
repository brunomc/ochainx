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
            procedencia:''
        }
    }
    componentWillMount(){
        axios.get('http://ochain.herokuapp.com/api/data/product'+ this.props.location.pathname).then(res=>{
          console.log('RESULTADO: ', res);
          if(res.data.nameProduct === ""){
            this.setState({
                produto: {},
                procedencia:'FALSO'
              });
          }else {
            this.setState({
                produto: res.data,
                procedencia:'VERDADEIRO'
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

            <Texto
               manufacturer="Aurora"
               nameProduct= "Cerveja Artesanal"
               productionDate="08/08/2018"
               text1="Link do registro na blockchain:"
               link="https://etherscan.io">
            </Texto>

          {/*  <img style={{padding:'50vh'}} src="http://www.avll.it/wp-content/uploads/2016/05/Alerts.gif" />
            <img style={{padding:'50vh'}} src="http://ds90media.com/wp-content/uploads/2014/12/check-mark.png" /> */}
       </div>
      );
    }
  }

  export default Valida;
