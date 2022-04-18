import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    mainSizes: [],
    topSizes: [],
    bottomSizes: [],
}

export const splitPositionSlice = createSlice({
    name: 'splitPosition',
    initialState,
    reducers: {    
        setMainSizes: (state, action) => {
            state.mainSizes = action.payload
        },
        setTopSizes: (state, action) => {
            state.topSizes = action.payload
        },
        setBottomSizes: (state, action) => {
            state.bottomSizes = action.payload
        },
    },
})

/* example of async thunk */
export const splitFetchPositionAsync = createAsyncThunk(
    'splitPositionAsync',
    async (getData) => {
        /* do something async, fetch data from api */
      const response = await fetch(getData)
      return response.data
    }
)

export const { setMainSizes, setTopSizes, setBottomSizes } = splitPositionSlice.actions
export const getSizes = (state) => state.splitPosition
export default splitPositionSlice.reducer


