import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

// Define a type for the slice state
interface initSteps {
  steps: string[] | undefined
}

// Define the initial state using that type
const initialState: initSteps = {
  steps: []
}

export const initial = createSlice({
    name: 'init',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      init: (state:any, action: PayloadAction<any>) => {
        state.steps = [...action.payload]
      },
    }
  })

  
  export const { init } = initial.actions

// Other code such as selectors can use the imported `RootState` type
export const steps = (state: RootState) => state.init.steps

export default initial.reducer