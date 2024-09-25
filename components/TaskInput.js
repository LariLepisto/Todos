import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    onAddTask(task);
    setTask('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add new task"
        style={styles.input}
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default TaskInput;