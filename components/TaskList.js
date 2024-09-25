import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TaskList = ({ tasks, onToggleTaskDone }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onToggleTaskDone(item.id)}>
          <View style={styles.taskContainer}>
            <Text style={[styles.taskText, item.done && styles.doneTask]}>
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  taskText: {
    fontSize: 16,
  },
  doneTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TaskList;