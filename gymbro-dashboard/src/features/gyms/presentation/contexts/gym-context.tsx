import { ReactNode, createContext, useContext } from "react";
import { IGYM } from "../../domain/entities/gym.entity";

interface BranchContextProviderProps {
    children: ReactNode;
    value: IGYM;
}

export const GYMContext = createContext<IGYM>({
    uuid: "",
    name: "",
    description: "",
    status: ""
});

export function useGYMContext() {
    return useContext(GYMContext);
}

export const GYMContextProvider: React.FC<BranchContextProviderProps> = ({ children, value }) => {
    return (
        <GYMContext.Provider value={value}>
            {children}
        </GYMContext.Provider>
    );
}
