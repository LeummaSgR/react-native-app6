import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobreJogo = require('../imgs/sobre_jogo.png');
const btnOutrosJogos = require('../imgs/outros_jogos.png');

export default class CenaPrincipal extends Component {
	static navigationOptions = {
		title: 'Cara ou Coroa'
	};

	render() {
		return (
			<View style={styles.principal}>
				<StatusBar backgroundColor='#2c714d' />
				<View style={styles.topo}>
					<Image source={logo} />

					<TouchableHighlight 
					activeOpacity={0.3}
					onPress={() => this.props.navigation.navigate('Resultado')}
					underlayColor={'#61bd8c'}>
						<Image source={btnJogar} />
					</TouchableHighlight>
				</View>

				<View style={styles.footer}>
					<TouchableHighlight 
					activeOpacity={0.3}
					onPress={() => this.props.navigation.navigate('Sobre')}
					underlayColor={'#61bd8c'}>
						<Image source={btnSobreJogo} />
					</TouchableHighlight>

					<TouchableHighlight 
					activeOpacity={0.3}
					onPress={() => this.props.navigation.navigate('Outros')}
					underlayColor={'#61bd8c'}
					>
						<Image source={btnOutrosJogos} />
					</TouchableHighlight>
				</View>
			</View>
		);
	}
} 

const styles = StyleSheet.create({
	principal: {
		backgroundColor: '#61bd8c',
		flex: 1,
	},
	topo: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 9,
	},
	footer: {
		justifyContent: 'space-between',
		flex: 1,
		flexDirection: 'row',
	},
});
