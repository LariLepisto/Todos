import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (e) {
      Alert.alert('Error loading tasks');
    }
  };

  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    } catch (e) {
      Alert.alert('Error saving tasks');
    }
  };

  const addTask = (task) => {
    if (!task) return;
    const newTasks = [...tasks, { id: Date.now().toString(), text: task, done: false }];
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const toggleTaskDone = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTaskDone={toggleTaskDone} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});