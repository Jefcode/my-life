import { create } from 'zustand';

interface IUseSidebar {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
}

const useSidebar = create<IUseSidebar>((set) => ({
	isOpen: false,
	open: () => set(() => ({ isOpen: true })),
	close: () => set(() => ({ isOpen: false })),
	toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebar;
