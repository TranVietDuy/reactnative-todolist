import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	item: {
		backgroundColor: "#FFFDF1",
		borderRadius: 10,
		marginBottom: 15,
		paddingVertical: 10,
		paddingHorizontal: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		elevation: 4,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 5,
	},
	desc: {
		fontStyle: "oblique",
	},
	itemInfo: {
		maxWidth: "85%",
	},
	iconWrapper: {
		justifyContent: "center",
		backgroundColor: "#FEE8EE",
		borderRadius: 50,
		padding: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		elevation: 4,
	},
})

export default styles