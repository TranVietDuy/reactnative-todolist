import { StatusBar } from "expo-status-bar"
import { FlatList, Image, ScrollView, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import styles from "./App.components.style"
import Form from "./components/Form"
import Task from "./components/Task"
import { useEffect, useState } from "react"

const logoCommu = require("./assets/commu-logo.png")



export default function App() {
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDesc, setTaskDesc] = useState("")
    const [taskList, setTaskList] = useState([])

    const handleAddTask = () => {
        if (taskTitle.length === 0) {
            alert("Please enter a task")
        } else {
            const task = {
                title: taskTitle,
                desc: taskDesc,
            }
            setTaskList([...taskList, task])
            setTaskTitle("")
            setTaskDesc("")
        }
    }
    const handleDeleteTask = (index) => {
        const newTaskList = [...taskList]
        newTaskList.splice(index, 1)
        setTaskList(newTaskList)
    }
    const handleSaveTask = async () => {
        try {
            await AsyncStorage.setItem("taskList", JSON.stringify(taskList))
        } catch (error) {
            console.log(error)
        }
    }
    const handleLoadTask = async () => {
        try {
            const taskList = await AsyncStorage.getItem("taskList")
            if (taskList !== null) {
                setTaskList(JSON.parse(taskList))
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleLoadTask()
    }, [])

    useEffect(() => {
        handleSaveTask()
    }, [taskList])



	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<Image source={logoCommu} style={styles.logo} />
				{/* <ScrollView>
					{taskList.map((task, index) => (
                        <Task
                            key={index}
                            title={task.title}
                            desc={task.desc}
                            handleDeleteTask={() => handleDeleteTask(index)}
                        />
                    ))}

				</ScrollView> */}
                <View style={styles.taskList}>
                <FlatList
                    data={taskList}
                    renderItem={({ item, index }) => (
                        <Task
                            title={item.title}
                            desc={item.desc}
                            handleDeleteTask={() => handleDeleteTask(index)}
                        />
                    )}
                />

                </View>
			</View>
			<Form 
                taskTitle={taskTitle}
                setTaskTitle={setTaskTitle}
                taskDesc={taskDesc}
                setTaskDesc={setTaskDesc}
                handleAddTask={handleAddTask}  
             />
			<StatusBar style="auto" />
		</View>
	)
}

