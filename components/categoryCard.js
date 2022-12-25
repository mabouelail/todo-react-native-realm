import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Pressable,
  Image,
  useWindowDimensions,
} from 'react-native';
import icons from '../staticData/icons';
export default CategoryCard = props => {
  const category = props.category;
  const styles = useStyles(useWindowDimensions());
  return (
    <Pressable style={styles.container} onPress={props.action}>
      <Image source={icons.general} style={styles.icon} />
      <View>
        <Text style={styles.categoryTitle}>{category.categoryType}</Text>
        <Text>{category.numberOfTasks} Tasks</Text>
      </View>
    </Pressable>
  );
};

const useStyles = ({width, height}) =>
  StyleSheet.create({
    container: {
      width: width / 2.2,
      height: height / 4.174,
      borderRadius: 29,
      backgroundColor: '#FAF9F6',
      elevation: 2,
      padding: 20,
      justifyContent: 'space-between',
      margin: 9,
    },
    categoryTitle: {
      fontSize: 25,
      color: 'black',
      fontWeight: '600',
      textTransform: 'capitalize',
    },
    icon: {
      width: 40,
      height: 40,
    },
  });
