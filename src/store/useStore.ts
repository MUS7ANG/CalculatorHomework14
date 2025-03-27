import { create } from "zustand"

interface PasswordStore {
    password: string;
    passwordCorrect: string;
    handleCheck: () => void
    handleAdd: (digit: string) => void
    handleRemove: () => void
    isAccessGranted: boolean
}

export const useStore = create<PasswordStore>((set) => ({
    password: "",
    passwordCorrect: "3007",
    isAccessGranted: false,
    handleAdd: (digit) =>
        set((state) => ({
            password: state.password.length < 4 ? state.password + digit : state.password,
        })),
    handleRemove: () =>
        set((state) => ({
            password: state.password.slice(0, -1),
        })),
    handleCheck: () =>
        set((state) => ({
            isAccessGranted: state.password === state.passwordCorrect,
        })),
}));