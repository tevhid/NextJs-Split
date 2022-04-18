import { combineReducers , configureStore } from '@reduxjs/toolkit'
import splitPositionSlice from './features/splitPositionSlice'
import addRowSlice from './features/addRowSlice'

const store = configureStore({
  reducer:  combineReducers({
        splitPosition: splitPositionSlice,
        addRow: addRowSlice,
  })
})

export default store