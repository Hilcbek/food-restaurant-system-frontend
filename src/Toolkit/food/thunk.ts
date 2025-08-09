import { foodApi } from '@/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

const useCreatFood = createAsyncThunk(
  'timeSlot/getAllTimeSlotRelatedToWorkShop',
  async (_, thunkApi) => {
    try {
      const response = await foodApi.createFood();

      return response;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return thunkApi.rejectWithValue(error.response.data.error);
      }
      return thunkApi.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const foodThunk = {
  useCreatFood,
};