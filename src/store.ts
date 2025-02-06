import { configureStore } from '@reduxjs/toolkit';
import billsSlice from './BillsComponent/BillsSlice';
import { mainViewSlice } from './TopNavigation/TopNavSlice';

export const store = configureStore({
  reducer: {
    bills: billsSlice,
    viewSelection: mainViewSlice.reducer
  }, // You'll add your reducers here later
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;  