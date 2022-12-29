import React from 'react';
import {Text, View, Button, StyleSheet, Pressable, Image} from 'react-native';
import icons from '../staticData/icons';
export default AddButton = props => {
  return (
    <Pressable style={[styles.container,  props.styling]} onPress={props.action}>
      <Image source={props.src} style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 80,
    position: 'absolute',
    bottom: 30,
    right: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    opacity: 0.8,
    
  },
  icon: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    
  },
});
