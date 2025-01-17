// store/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the ModalData interface
export interface ModalData {
  isOpen: boolean; // Whether the modal is open or closed
  title: string; // Title of the modal
  content: string; // Content of the modal
  formData?: Record<string, any>; // Dynamic form data (optional)
}

// Define the initial state
export const initialModalState: ModalData = {
  isOpen: false,
  title: '',
  content: '',
  formData: {}, // Initialize as an empty object
};

// Create the slice
const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    openModal(
      state,
      action: PayloadAction<{ title: string; content: string; formData?: Record<string, any> }>
    ) {
      state.isOpen = true;
      state.title = action.payload.title;
      state.content = action.payload.content;
      // state.formData = action.payload.formData || {}; // Assign form data if provided
    },
    closeModal(state) {
      state.isOpen = false;
      state.title = '';
      state.content = '';
      // state.formData = {}; // Reset form data
    },
    updateFormData(state, action: PayloadAction<Record<string, any>>) {
      state.formData = { ...state.formData, ...action.payload }; // Merge new form data
    },
  },
});

// Export actions
export const { openModal, closeModal, updateFormData } = modalSlice.actions;

// Export the reducer
export default modalSlice.reducer;


// note how to use this slicer

// const dispatch = useDispatch();
// const modalState = useSelector((state: RootState) => state.modal);

// const openDynamicModal = () => {
//   dispatch(openModal({ title: 'Dynamic Modal', content: 'This is dynamic content.', formData: { name: '', age: '' } }));
// };

// const closeDynamicModal = () => {
//   dispatch(closeModal());
// };

// const handleFormUpdate = (field: string, value: string) => {
//   dispatch(updateFormData({ [field]: value }));
// };
