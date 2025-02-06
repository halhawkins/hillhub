import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bill, BillResponse } from "./BillsAPI";

interface BillsState {
  bills: Bill[];
  page: number;
  billDetails: BillResponse | null; // Add the details slice here to hold the selected bill's details.
}

const initialState: BillsState = {
  bills: [],
  page: 0, // or 1, if you'd prefer a 1-based page count
  billDetails: null,
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
    setBillDetails: (state, action: PayloadAction<BillResponse>) => {
      console.log("Setting bill details", action.payload);
      state.billDetails = {...action.payload};
    }
  },
});

export const { setBills, setBillDetails } = billsSlice.actions;
export default billsSlice.reducer;
