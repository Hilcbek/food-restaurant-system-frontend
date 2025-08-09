import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { foodThunk } from './thunk';
import type { initialState, interfaceIResponse } from './types';

const initialState: initialState = {
  data: {
    data: [],
    message: '',
    status: 0,
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(foodThunk.useCreatFood.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      foodThunk.useCreatFood.fulfilled,
      (state, action: PayloadAction<interfaceIResponse>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      }
    );
  },
});
