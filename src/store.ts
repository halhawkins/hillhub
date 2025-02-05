import { configureStore } from '@reduxjs/toolkit';
import billsSlice from './BillsComponent/BillsSlice';

export const store = configureStore({
  reducer: {
    bills: billsSlice,
  }, // You'll add your reducers here later
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;