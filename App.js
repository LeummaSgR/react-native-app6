import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CenaPrincipal from './src/components/CenaPrincipal';
import OutrosJogos from './src/components/OutrosJogos';
import Resultado from './src/components/Resultado';
import SobreJogo from './src/components/SobreJogo';
//61bd8c
const RootStack = createStackNavigator(
  {
    Outros: OutrosJogos,
    Principal: CenaPrincipal,
    Resultado: Resultado,
    Sobre: SobreJogo,
  },
  {
    initialRouteName: 'Principal',
    navigationOptions: {
      headerTintColor: '#478865',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}
