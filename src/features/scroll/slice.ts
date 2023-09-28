import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IScrollState {
    scrollTop: number
}

const initialState: IScrollState = {
    scrollTop: 0
}

export const scrollSlice = createSlice({
    name: "scroll",
    initialState,
    reducers: {
        setScrollTop: (state, action: PayloadAction<number>) => {
            state.scrollTop = action.payload
        }
    }
})

export const { setScrollTop } = scrollSlice.actions

export default scrollSlice.reducer