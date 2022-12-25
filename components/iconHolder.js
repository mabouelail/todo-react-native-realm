import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
export default IconHolder = props => {
  return (
    <View style={[styles.iconHolder, props.styling]}>
      <Image source={props.src} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconHolder: {
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    elevation: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
