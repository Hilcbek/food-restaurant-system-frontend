import { create } from 'zustand';

interface createMealModal {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const useEditMeal = create<createMealModal>((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
}));

export default useEditMeal;
