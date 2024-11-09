import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from '@/features/auth/infrastructure/redux/auth.slice';
import gymReducer from '@/features/gyms/infrastructure/data/localstorage/redux/gym.slice';

const persistConfig = {
    key: "root",
    storage
}

const reducersToPersist = combineReducers({
    auth: authReducer,
    gym: gymReducer
})

const persistedReducers = persistReducer(persistConfig, reducersToPersist);

export const store = configureStore({
    reducer: persistedReducers,
    devTools: process.env.NODE_ENV !== "production"
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;