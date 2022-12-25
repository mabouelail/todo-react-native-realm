import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
export default CustomCheckBox = () => {


  return (
    <CheckBox
      disabled={false}
      value={toggleCheckBox}
      onValueChange={newValue => setToggleCheckBox(newValue)}
      tintColors={{true: '#5886FE', false: 'gray'}}
    />
  );
};
