import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

// Define a type for the slice state
interface initForm {
  form: {} | undefined
}

// Define the initial state using that type
const initialState: initForm = {
    form: {}
}

export const initForm = createSlice({
    name: 'form',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      getForm: (state:any, action: PayloadAction<object>) => {
        state.form = {...action.payload}
      },
    }
  })

  
 // export const { form } = initForm.actions

// Other code such as selectors can use the imported `RootState` type
export const activeForm = (state: RootState) => state.form

export default initForm.reducer