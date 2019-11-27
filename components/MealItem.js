import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground
} from 'react-native';

const MealItem = props => {
	return (
		<TouchableOpacity style={styles.mealItem} onPress={props.onMealSelected}>
			<View style={{ flex: 1 }}>
				<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
					<ImageBackground
						source={{ uri: props.item.imageUrl }}
						style={styles.imageBg}>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>{props.item.title}</Text>
						</View>
					</ImageBackground>
				</View>
				<View style={{ ...styles.mealRow, ...styles.mealBottomRow }}>
					<Text>{props.item.duration}</Text>
					<Text>{props.item.complexity}</Text>
					<Text>{props.item.affordibility}</Text>
				</View>

				<Text></Text>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		flex: 1,
		borderRadius: 10,
		backgroundColor: '#747474',
		margin: 10,
		overflow: 'hidden'
	},
	mealRow: {
		flexDirection: 'row'
	},
	mealHeader: {
		height: '85%'
	},
	mealBottomRow: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	imageBg: {
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	titleContainer: {
		padding: 10,
		backgroundColor: 'rgba(0,0,0,0.5)',
		textAlign: 'center',
		width: '100%'
	},
	title: {
		textAlign: 'center'
	}
});

export default MealItem;
