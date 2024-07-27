import { configureStore } from '@reduxjs/toolkit';

import modalsSlice from './modals';

const store = configureStore({
  reducer: {
    modalsSlice: modalsSlice.reducer,
  },
});

export default store;
