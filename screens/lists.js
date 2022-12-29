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
import TaskContext from '../realm/realmConfig';
const {useQuery, useRealm} = TaskContext;
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Lists</Text>
      <Image source={icons.menu} style={styles.icon} />
    </View>
  );
};

export default Lists = ({navigation}) => {
  const categories = useQuery('Category');
  const realm = useRealm();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF9F6" />
      <FlatList
        ListHeaderComponent={Header}
        data={categories}
        renderItem={({item}) => (
          <CategoryCard
            category={{
              categoryName: item.categoryName,
              numOfTasks: item.numOfTasks,
            }}
            action={() =>
              navigation.navigate('CategoryDetails', {
                categoryName: item.categoryName,
                numOfTasks: item.numOfTasks,
              })
            }
          />
        )}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      <AddButton
        src={icons.add}
        action={() => navigation.navigate('NewTask')}
      />
      <AddButton
        src={icons.error}
        action={() => {
          realm.write(() => {
            realm.deleteAll();
          });
        }}
        styling={{bottom: 30, left: 15}}
      />
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
