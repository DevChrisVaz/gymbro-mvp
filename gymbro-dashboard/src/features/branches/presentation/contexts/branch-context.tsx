import { ReactNode, createContext, useContext } from "react";
import { IBranch } from "../../domain/entities/branch.entity";

interface BranchContextProviderProps {
    children: ReactNode;
    value: IBranch;
}

// enum BranchActionKind {
//     SET_BRANCH = "SET_BRANCH"
// }

// interface BranchAction {
//     type: BranchActionKind;
//     payload: IBranch;
// }

// interface IBranchContext {
//     state: IBranch;
//     dispatch: Dispatch<BranchAction>
// }

export const BranchContext = createContext<IBranch>({
    email: "",
    name: "",
    phone: "",
    uuid: "",
    createdAt: "",
    updatedAt: ""
});

export function useBranchContext() {
    return useContext(BranchContext);
}

export const BranchContextProvider: React.FC<BranchContextProviderProps> = ({ children, value }) => {
    // const initialState: IBranch = {
    //     uuid: "",
    //     name: "",
    //     phone: "",
    //     email: ""
    // };

    // const reducer = (state: IBranch, action: BranchAction) => {
    //     switch (action.type) {
    //         case BranchActionKind.SET_BRANCH:
    //             return action.payload;
    //         default:
    //             return state;
    //     }
    // };

    // const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <BranchContext.Provider value={value}>
            {children}
        </BranchContext.Provider>
    );
}
