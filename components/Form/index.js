import React from "react"
import {
	KeyboardAvoidingView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"

import styles from "./style"

const Form = ({
	handleAddTask,
	taskDesc,
	taskTitle,
	setTaskDesc,
	setTaskTitle,
}) => {

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.addTask}
		>
			<TouchableOpacity onPress={handleAddTask}>
				<View style={styles.button}>
					<Text style={styles.buttonText}>ADD TASK</Text>
				</View>
			</TouchableOpacity>

			<TextInput
				onChangeText={setTaskTitle}
				value={taskTitle}
				style={styles.input}
				placeholder="Title"
			/>
			<TextInput
				onChangeText={setTaskDesc}
				value={taskDesc}
				style={styles.input}
				placeholder="Description"
			/>
		</KeyboardAvoidingView>
	)
}

export default Form
