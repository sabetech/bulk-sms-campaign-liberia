import { configureStore } from '@reduxjs/toolkit';
import campaign from './campaign_slice';
import { persistReducer, persistStore, 
        FLUSH,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
        REHYDRATE, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, campaign)

export const store = configureStore({
  reducer: {vf:persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)