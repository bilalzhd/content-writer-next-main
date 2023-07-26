// AppContext.tsx
'use client';
import React, { createContext, useState, useContext } from "react";

interface AppContextData {
    darkMode: boolean;
    toggleDarkMode: () => void;
}
const defaultContextData: AppContextData = {
    darkMode: true,
    toggleDarkMode: () => { },
};

const AppContext = createContext<AppContextData>(defaultContextData);

export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </AppContext.Provider>
    );
}
