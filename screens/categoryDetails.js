import React, {useEffect} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import IconHolder from '../components/iconHolder';
import TaskCard from '../components/taskCard';
import icons from '../staticData/icons';
import notes from '../staticData/note';
import TaskContext from '../realm/realmConfig';
const {useObject, useQuery} = TaskContext;

export default CategoryDetails = ({route, navigation}) => {
  const {categoryName, numOfTasks} = route.params;
  const categories = useQuery('Category');
  const cat = categories.findIndex(item => item.categoryName === categoryName);
  useEffect(() => {
    console.log(cat);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#5886FE" />
      <View style={styles.header}>
        <IconHolder src={icons.general} />
        <Text style={styles.headerTitle}>{categoryName}</Text>
        <Text style={styles.headerSubTitle}>{numOfTasks} Tasks</Text>
      </View>
      <View style={styles.taskList}>
        <View style={styles.list}>
          <FlatList
            data={categories[cat].tasks}
            renderItem={({item}) => <TaskCard t={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#5886FE',
  },
  header: {
    marginTop: '25%',
    marginLeft: 40,
    marginBottom: 40,
    // backgroundColor: 'black',
    height: '18%',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    top: 8,
  },
  headerSubTitle: {
    fontSize: 23,
    fontWeight: 'normal',
    color: 'white',
    fontFamily: 'sans-serif-thin',
  },
  taskList: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: 'center',
    width: '100%',
    // overflow: 'hidden'
  },
  list: {
    // backgroundColor: 'yellow',
    marginTop: 20,
    width: '95%',
  },
});
