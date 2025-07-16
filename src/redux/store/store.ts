import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./../../redux/selectors/taskSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist Konfiguration
const persistConfig = {
    key: "root",
    storage,
};

// Reducer zusammenführen
const rootReducer = combineReducers({
    tasks: taskReducer,
});

// Persistierten Reducer erstellen
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store erstellen mit Middleware
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Für persistierte Daten notwendig
        }),
});

// Persistor für Persist-Store
export const persistor = persistStore(store);

// TypeScript Typen für den Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
