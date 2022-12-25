import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Image,
} from 'react-native';
import icons from '../staticData/icons';
import {createnewTask} from '../redux/tasks';
import {useSelector, useDispatch} from 'react-redux';
const TaskInfoCard = props => {
  return (
    <View style={styles.containerInput}>
      <Image source={props.src} style={styles.iconInput} />
      {props.children}
    </View>
  );
};
export default NewTask = () => {
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [thirdInput, setThirdInput] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF9F6" />
      <KeyboardAvoidingView behavior="height" style={styles.body}>
        <Text style={styles.header}>New Task</Text>
        <Text style={styles.question}>What are you Planning? 🙄</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="I can hear you"
            style={styles.input}
            multiline={true}
            maxLength={100}
            onChangeText={content => setFirstInput(content)}
          />
        </View>
        <View style={styles.taskInfo}>
          <TaskInfoCard src={icons.addNote}>
            <TextInput
              placeholder="add note"
              style={styles.inputInput}
              onChangeText={content => setSecondInput(content)}
            />
          </TaskInfoCard>
          <TaskInfoCard src={icons.category}>
            <TextInput
              placeholder="category"
              style={styles.inputInput}
              onChangeText={content => setThirdInput(content)}
            />
          </TaskInfoCard>
        </View>
        <Pressable
          title="Create"
          style={styles.createButton}
          onPress={() => {
            dispatch(
              createnewTask({
                content: firstInput,
                note: secondInput,
                category: thirdInput,
              }),
            );
          }}>
          <Text style={styles.buttonText}>Create</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FAF9F6',
  },
  header: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
    marginBottom: '5%',
  },
  question: {
    fontSize: 17,
    color: 'gray',
    marginLeft: '5%',
  },
  body: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#FAF9F6',
  },
  inputContainer: {
    backgroundColor: '#FAF9F6',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 1,
    height: 80,
    width: '92%',
    marginLeft: '5%',
    justifyContent: 'center',
  },
  input: {},
  taskInfo: {
    marginLeft: '4%',
  },
  createButton: {
    backgroundColor: '#5886FE',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
    borderRadius: 10,
    padding: 5,
    width: '97%',
    margin: 4,
    elevation: 0.2,
  },
  iconInput: {
    width: 20,
    height: 20,
  },
  inputInput: {
    marginLeft: 10,
    width: '100%',
  },
});
