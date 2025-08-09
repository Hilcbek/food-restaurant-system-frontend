import { baseURL } from './components/config/axios';
import type { IFood } from './Toolkit/food/types';

const createFood = async function (data: IFood) {
  const resposne = await baseURL.post('/', data);
  return resposne.data;
};
export const foodApi = {
  createFood,
};
