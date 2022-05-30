import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../services/DataServices";

export interface AddedState {
    data: IData[],
}

const initialState: AddedState  = {
    data: [],
}

export const addedSlice = createSlice({
    name: 'added',
    initialState,
    reducers: {
        addFavoriteCat: (state, action: PayloadAction<IData>) => {
            state.data.push(action.payload)
        },
    }
})

export const { addFavoriteCat } = addedSlice.actions
export default addedSlice.reducer