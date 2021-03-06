import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCountry: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = { value: action.payload };
      return state;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const { setCountry } = countriesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCountry = (state) => state.countries.value;

export default countriesSlice.reducer;
