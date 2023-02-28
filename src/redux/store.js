import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';


// import persistedReducer from './rootReducer';

export const store = configureStore({
  reducer:rootReducer
  // reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
    // }),
});

// export const persistor = persistStore(store);
