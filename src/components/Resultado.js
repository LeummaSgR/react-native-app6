import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';

const moedaCara = require('../imgs/moeda_cara.png');
const moedaCoroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {
	constructor(props) {
		super(props);

		this.state = { resultado: '' };
	}

	componentWillMount() {
		const numAleatorio = Math.floor(Math.random() * 2 );
		let caraOuCoroa = '';

		if(numAleatorio)
			caraOuCoroa = 'cara';
		else
			caraOuCoroa = 'coroa';

		this.setState({ resultado: caraOuCoroa });
	}


	static navigationOptions = {
		title: 'Resultado',
	}

	render() {
		if(this.state.resultado === 'cara')
			return (
				<View style={styles.principal} >
					<StatusBar backgroundColor = '#2c714d' />
					<Image source={moedaCara} />
				</View>
			);
		//else
		return (
			<View style={styles.principal} >
				<StatusBar backgroundColor = '#2c714d' />
				<Image source={moedaCoroa} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	principal: {
		alignItems: 'center',
		backgroundColor: '#61bd8c',
		flex: 1,
		justifyContent: 'center',
	},

});
