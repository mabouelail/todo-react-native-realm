import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IconHolder from './iconHolder';
import CustomCheckBox from './checkBox';
import CheckBox from '@react-native-community/checkbox';

export default TaskCard = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.d}>
        <Text style={styles.title}>{props.task}</Text>
        <Text>{props.note}</Text>
      </View>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
        tintColors={{true: '#5886FE', false: '#C8C8C8'}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 5,
    height: 80,
    elevation: 0.2,
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 7,
  },
  title: {
    color: '#484848',
    fontSize: 17,
    // fontFamily:'notoserif'
  },
  d: {
    justifyContent: 'space-evenly',
    height: '100%',
  },
});
