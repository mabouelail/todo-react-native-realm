import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import AddButton from '../components/addButton';
import icons from '../staticData/icons';
import CategoryCard from '../components/categoryCard';
import {useSelector} from 'react-redux';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Lists</Text>
      <Image source={icons.menu} style={styles.icon} />
    </View>
  );
};
export default Lists = ({navigation}) => {
  const categories = useSelector(state => state.newTaskReducer.categories);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF9F6" />
      <FlatList
        ListHeaderComponent={Header}
        data={categories}
        renderItem={({item}) => (
          <CategoryCard
            category={item}
            action={() => navigation.navigate('CategoryDetails', item)}
          />
        )}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />

      <AddButton action={() => navigation.navigate('NewTask')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
  },
  header: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: '600',
    color: 'black',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});
