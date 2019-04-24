import React, { Component } from 'react';
import { View } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';
import styles from './styles';

export default class Timer extends Component {
	state = {
		intervalo: null
	};
	componentWillMount() {
		const date = new Date('2019-04-25T00:01-0300');
		const dataAtual = new Date();
		const intervalo = date - dataAtual;
		this.setState({ intervalo: intervalo });
	}
	render() {
		return (
			<View>
				<TimerCountdown
					initialMilliseconds={this.state.intervalo}
					// onTick={(milliseconds) => console.log('tick', milliseconds)}
					onTick={() => {}}
					onExpire={() => console.log('complete')}
					formatMilliseconds={(milliseconds) => {
						const remainingSec = Math.round(milliseconds / 1000);
						const seconds = parseInt((remainingSec % 60).toString(), 10);
						const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
						const hours = parseInt((remainingSec / 3600).toString(), 10);
						const s = seconds < 10 ? '0' + seconds : seconds;
						const m = minutes < 10 ? '0' + minutes : minutes;
						let h = hours < 10 ? '0' + hours : hours;
						h = h === '00' ? '' : h + ':';
						return h + m + ':' + s;
					}}
					allowFontScaling={true}
					style={styles.timer}
				/>
			</View>
		);
	}
}
