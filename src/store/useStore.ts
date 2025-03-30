import { create } from "zustand"

interface PasswordStore {
    password: string;
    passwordCorrect: string;
    handleCheck: () => void
    handleAdd: (digit: string) => void
    handleRemove: () => void
    isChecked: boolean
    isAccessGranted: boolean
}

export const useStore = create<PasswordStore>((set) => ({
    password: '',
    passwordCorrect: '3007',
    isAccessGranted: false,
    isChecked: false,
    handleAdd: (digit) =>
        set((state) => {
            if (state.password.length < 4) {
                return { password: state.password + digit, isChecked: false };
            }
            return state;
        }),
    handleRemove: () =>
        set((state) => ({ password: state.password.slice(0, -1), isChecked: false })),
    handleCheck: () =>
        set((state) => ({
            isAccessGranted: state.password === state.passwordCorrect,
            isChecked: true,
        })),
}));