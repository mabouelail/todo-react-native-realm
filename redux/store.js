import {configureStore} from '@reduxjs/toolkit';
import newTaskReducer from './tasks';

const store = configureStore({
  reducer: {
    newTaskReducer,
  },
});

export default store;
