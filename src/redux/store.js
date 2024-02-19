import { combineSlices, configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
  
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ["contacts"]
}

const rootReducer = combineSlices({
  filters: filtersReducer,
  contacts: contactsReducer.contactsReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
// export default {persistor, store }