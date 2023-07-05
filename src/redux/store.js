import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/authSlice'
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { contactsReducer, filterReducer } from './contacts/contactsSlice';
import { profileReduser } from './profile/profileSlice';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['access_token', 'user']
  }


  const persistedReducer = persistReducer(persistConfig, authReducer)


  export const store = configureStore({
    reducer: {
      auth: persistedReducer,
      profile: profileReduser,
      contacts: contactsReducer,
      filter: filterReducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  export  const persistor = persistStore(store)
