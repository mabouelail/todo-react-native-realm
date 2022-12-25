import Realm from 'realm';
import {createSlice} from '@reduxjs/toolkit';
import categories from '../staticData/categories';
import icons from '../staticData/icons';
const initialState = {
  categories: [...categories],
};
const newTaskSlice = createSlice({
  name: 'newTaskSlice',
  initialState,
  reducers: {
    createnewTask: (state, action) => {
      checkCategory(action.payload, state.categories);
    },
  },
});
function checkCategory(task, categories) {
  const avail = categories.findIndex(
    item => item.categoryType === task.category.toLowerCase().trim(),
  );
  if (avail >= 0) {
    categories[avail].tasks.push(task);
    categories[avail].numberOfTasks += 1;
  } else {
    const cat = {
      categoryType: task.category.toLowerCase().trim(),
      icon: icons.general,
      numberOfTasks: 1,
      tasks: [task],
    };
    categories.push(cat);
  }
}
export const {createnewTask} = newTaskSlice.actions;
export default newTaskReducer = newTaskSlice.reducer;
