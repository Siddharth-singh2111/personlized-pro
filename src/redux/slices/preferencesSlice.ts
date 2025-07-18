import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreferencesState {
  darkMode: boolean;
  categories: string[];
}

const initialState: PreferencesState = {
  darkMode: false,
  categories: ["technology"], // default
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { toggleDarkMode, setCategories } = preferencesSlice.actions;
export default preferencesSlice.reducer;
