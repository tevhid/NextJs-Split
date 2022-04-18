import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    id: 0,
    contract: '',
    bidding: '',
    data: '',    
}

export const addRowSlice = createSlice({
    name: 'addRow',
    initialState,
    reducers: {    
        setForm: (state, action) => {
            state.id = action.payload.id;
            state.contract = action.payload.contract;
            state.bidding = action.payload.bidding;
            state.data = action.payload.data;
        }      
    },
})

/* example of async thunk */
export const addRowAsync = createAsyncThunk(
    'addRowAsync',
    async (getData) => {
        /* do something async, fetch data from api */
      const response = await fetch(getData)
      return response.data
    }
)

export const { setForm } = addRowSlice.actions
export const getForm = (state) => state.addRow
export default addRowSlice.reducer


