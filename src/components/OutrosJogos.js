import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default class OutrosJogos extends Component {

	static navigationOptions = {
		title: 'Outros Jogos'
	};

	render() {
		return (
			<View style={styles.principal} >
				<StatusBar backgroundColor = '#2c714d' />
				<Text style={styles.principalTxt}>Sinto lhe informar, mas caístes num belo dum dibre.</Text>
				<Text style={styles.principalTxt}>Não existem outros jogos!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	principal: {
		backgroundColor: '#61bd8c',
		flex: 1,
		justifyContent: 'flex-start',
		paddingTop: 30,
	},
	principalTxt: {
		color: '#FFF',
		marginHorizontal: 30,
	}
});
