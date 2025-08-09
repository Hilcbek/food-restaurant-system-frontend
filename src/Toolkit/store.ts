import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import foodSlice from './food/slice';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  foodSlice,
});
const persistReducers = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
