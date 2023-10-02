import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IScrollState {
    scrollTop: number
    pageScroll: "about" | "skills" | "works" | "project" | "contact"
}

const initialState: IScrollState = {
    scrollTop: 0,
    pageScroll: "about"
}

export const scrollSlice = createSlice({
    name: "scroll",
    initialState,
    reducers: {
        setScrollTop: (state, action: PayloadAction<number>) => {
            state.scrollTop = action.payload
        },
        setScrollPage: (state, action: PayloadAction<"about" | "skills" | "works" | "project" | "contact">) => {
            state.pageScroll = action.payload
        }
    }
})

export const { setScrollTop, setScrollPage } = scrollSlice.actions

export default scrollSlice.reducer