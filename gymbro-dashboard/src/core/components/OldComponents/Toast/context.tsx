import { createContext, useState } from "react";
import type { IToast, IToastContext } from "./Toast.d";

export const ToastContext = createContext<IToastContext>({
    toastList: [],
    setToastList: () => { },
});

interface ToastProviderProps {
    children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toastList, setToastList] = useState<Array<IToast>>([]);
    const value = {
        toastList,
        setToastList,
    };

    return (
        <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
    );
};