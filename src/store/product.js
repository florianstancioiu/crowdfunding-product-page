import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showBackThisProjectModal: false,
  showThankYouModal: false,
  isBookmarked: false,
  selectedPledge: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    showBackThisProjectModal(state, action) {
      state.showBackThisProjectModal = true;
      state.selectedPledge =
        action?.payload?.selectedPledge !== undefined
          ? action.payload.selectedPledge
          : null;
    },
    hideBackThisProjectModal(state) {
      state.showBackThisProjectModal = false;
      state.selectedPledge = null;
    },
    showThankYouModal(state) {
      state.showThankYouModal = true;
    },
    hideThankYouModal(state) {
      state.showThankYouModal = false;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
