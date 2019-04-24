import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import Timer from './components/Timer';
import logo from './assets/images/logo.png';

// import { Container } from './styles';

const App = () => (
	<View style={styles.container}>
		<StatusBar backgroundColor="#370E6A" barStyle="light-content" />
		{/* <Text style={styles.logo}>A</Text> */}
		<Image source={logo} style={{ transform: [{ scale: 0.75 }] }} />
		<View style={styles.timer}>
			<Timer intervalo={new Date('2019-04-25T00:01-0300').getTime() - new Date().getTime()} />
		</View>
	</View>
);

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#370E6A'
	},
	logo: {
		fontFamily: 'Heroes Assemble Italic',
		fontSize: 400,
		color: '#F0F4F7',
		elevation: 5
	},
	timer: {}
});
