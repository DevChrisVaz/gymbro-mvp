import { RootState } from "@/core/data/frameworks/datasources/local/redux/store";
import { IGYM } from "@/features/gyms/domain/entities/gym.entity";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Status = "INITIAL" | "LOADING" | "SUCCEEDED" | "FAILED";

type GYMState = {
    gym: IGYM | null;
    status: Status;
    error: string | null | undefined;
}

const initialState: GYMState = {
    gym: null,
    status: 'INITIAL',
    error: null
};

export const gymSlice = createSlice({
    name: "gym",
    initialState,
    reducers: {
        setGYM: (state: GYMState, action: PayloadAction<IGYM>) => {
            state.gym = action.payload;
        },
        rmGYM: (state: GYMState) => {
            state.gym = null
        },
    }
});

export const {
    setGYM,
    rmGYM
} = gymSlice.actions;

export const selectGYM = (state: RootState) => state.gym.gym;

export default gymSlice.reducer;