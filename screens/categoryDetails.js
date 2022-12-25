import React from 'react';
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

export default CategoryDetails = ({route, navigation}) => {
  const {categoryType, numberOfTasks, tasks} = route.params;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#5886FE" />
      <View style={styles.header}>
        <IconHolder src={icons.general} />
        <Text style={styles.headerTitle}>{categoryType}</Text>
        <Text style={styles.headerSubTitle}>{numberOfTasks} Tasks</Text>
      </View>
      <View style={styles.taskList}>
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({item}) => (
              <TaskCard task={item.content} note={item.note} />
            )}
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
