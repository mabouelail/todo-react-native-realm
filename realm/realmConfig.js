import {Realm, createRealmContext} from '@realm/react';
import 'react-native-get-random-values';

export function checkCategory(realm, t, categories) {
  const avail = categories.findIndex(item => item.categoryName === t.category);
  if (avail >= 0) {
    categories[avail].tasks.push(t);
    categories[avail].numOfTasks += 1;
  } else {
    const c = realm.create('Category', {
      _id: new Realm.BSON.ObjectId(),
      categoryName: t.category,
      numOfTasks: 1,
      tasks: [t],
    });
  }
}
const Task = {
  name: 'Task',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    task: {type: 'string', default: ''},
    note: {type: 'string', default: ''},
    category: 'string',
    status: {type: 'bool', default: true},
  },
};
const Category = {
  name: 'Category',
  primaryKey: 'categoryName',
  properties: {
    _id: 'objectId',
    categoryName: 'string',
    numOfTasks: {type: 'int', default: 0},
    tasks: 'Task[]',
  },
};

const config = {
  schema: [Task, Category],
  deleteRealmIfMigrationNeeded: true,
};
export default createRealmContext(config);
