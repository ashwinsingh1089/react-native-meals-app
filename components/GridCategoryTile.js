import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform,
	TouchableNativeFeedback
} from 'react-native';
import { TouchableOpacity } from 'react-native';

const GridCategoryTile = props => {
	let TouchableCmp = TouchableOpacity;
	if (Platform.OS === 'android') {
		TouchableCmp = TouchableNativeFeedback;
	}
	return (
		<View style={{ ...styles.gridItem }}>
			<TouchableCmp style={{ flex: 1 }} onPress={props.onItemPress}>
				<View style={{ ...styles.container, backgroundColor: props.item.color }}>
					<Text numberOfLines={2}>{props.item.title}</Text>
				</View>
			</TouchableCmp>
		</View>
	);
};
const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 10,
		height: 150
	},
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		padding: 10,
		borderRadius: 10
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'right'
	}
});

export default GridCategoryTile;
