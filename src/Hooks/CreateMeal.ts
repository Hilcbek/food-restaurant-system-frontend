import { create } from 'zustand';

interface createMealModal {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const useCreateMeal = create<createMealModal>((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
}));

export default useCreateMeal;
