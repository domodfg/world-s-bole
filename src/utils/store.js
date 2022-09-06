import { configureStore } from "@reduxjs/toolkit";
import shopSlicer from "./shopSlicer"
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
    shop: shopSlicer,
  });

const persistConfig = {
    key: 'projectStorage',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      })
})