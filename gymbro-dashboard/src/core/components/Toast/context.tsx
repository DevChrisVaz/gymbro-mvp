import { createContext, useState } from "react";
import type { IToast, IToastContext } from "./Toast.d";
import { Toast } from ".";
import { v4 as uuid } from "uuid";

export const ToastContext = createContext<IToastContext>({
    toastList: [],
    addToast: () => { },
});

interface ToastProviderProps {
    children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toastList, setToastList] = useState<Array<IToast & { uuid: string }>>([]);

    const addIdentifierToToast = (toast: IToast): IToast & { uuid: string } => {
        return {
            uuid: uuid(),
            ...toast
        }
    }

    const addToast = (newToast: IToast) => {
        const toast = addIdentifierToToast(newToast);

        setToastList(prev => [...prev, toast]);

        setTimeout(() => {
            deleteToast(toast.uuid);
        }, 5500);
    }

    const deleteToast = (uuid: string) => {
        setToastList(prev => prev.filter((toast) => toast.uuid !== uuid));
    };

    const value: IToastContext = {
        toastList,
        addToast
    };

    return (
        <ToastContext.Provider value={value}>
            <div className="absolute right-0 top-[65px] mx-3 z-50">
                {toastList.map((toast, index) => {
                    const { type, message } = toast;

                    return <Toast key={index} message={message} type={type} />
                }).reverse()}
            </div>
            {children}
        </ToastContext.Provider>
    );
};