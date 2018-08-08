import React, { PureComponent } from 'react';
import { css, hover } from 'glamor';
import Texto from './Texto';
import validImg from '../media/images/valid.png';
import wallpaperImg from '../media/images/wallpaper.jpg';


class Infos extends PureComponent {
  render() {
    return (
      <div  >
        <Texto
           result="PRODUTO ORIGINAL"
           manufacturer="Aurora"
           nameProduct= "Cerveja Artesanal"
           productionDate="08/08/2018"
           text1="Link do registro na blockchain:"
           link="https://etherscan.io">
        </Texto>



      </div>
    );
  }
}

export default Infos;
