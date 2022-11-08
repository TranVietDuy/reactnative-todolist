import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	addTask: {
		paddingHorizontal: 30,
		width: "100%",
		backgroundColor: "#A3DDAD",
		borderTopEndRadius: 20,
		borderTopStartRadius: 20,
	},
	input: {
		backgroundColor: "#FFFDF1",
		borderRadius: 20,
		marginBottom: 15,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderColor: "#000",
		borderWidth: 2,
		fontSize: 16,
		fontStyle: "italic",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,

		elevation: 9,
	},
	button: {
		backgroundColor: "#000",
		borderRadius: 20,
		marginVertical: 15,
		color: "white",
		borderColor: "#000",
		borderWidth: 2,
		fontSize: 16,
		fontStyle: "italic",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,

		elevation: 9,
	},
	buttonText: {
		color: "#FFFDF1",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
		paddingVertical: 10,
	},
})

export default styles
