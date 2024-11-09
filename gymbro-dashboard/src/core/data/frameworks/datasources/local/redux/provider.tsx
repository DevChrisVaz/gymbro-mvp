import React from "react";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "@/core/components/Loader/Loader";

export function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={
                <div className="absolute w-screen h-screen d-flex justify-center items-center"><Loader /></div>
            } persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>);
}