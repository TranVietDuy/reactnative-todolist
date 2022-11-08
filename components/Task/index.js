import { Text, TouchableOpacity, View } from "react-native"
import IconDelete from "react-native-vector-icons/Ionicons"

import styles from "./style"

const Task = ({ title, desc, handleDeleteTask }) => {
	return (
		<View style={styles.item}>
			<View style={styles.itemInfo}>
				<Text style={styles.title}>{title} </Text>
				<Text style={styles.desc}>{desc}</Text>
			</View>
			<TouchableOpacity onPress={handleDeleteTask}>
				<View style={styles.iconWrapper}>
					<IconDelete name="trash-outline" size={24} color="black" />
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default Task
