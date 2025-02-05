import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bill } from "./BillsAPI";

interface BillsState {
  bills: Bill[];
  page: number;
}

const initialState: BillsState = {
  bills: [],
  page: 0, // or 1, if you'd prefer a 1-based page count
};

export const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    setBills: (state, action: PayloadAction<{ bills: Bill[]; page: number }>) => {
        console.log("Setting bills", action.payload.bills);
      const { bills, page } = action.payload;
      state.bills = bills;
      state.page = page;
    },
  },
});

export const { setBills } = billsSlice.actions;
export default billsSlice.reducer;
