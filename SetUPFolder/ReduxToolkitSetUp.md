# To set up Redux Toolkit


## Create a Redux store with configureStore  => create 'store.js' then add the following code

``` js
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

```


## Provide the Redux store to the React application components =>  in 'main.jsx' wrap <App />  and add => 

``` jsx
<Provider store={store}>
  <App />
</Provider>,

    

import { store } from './store.js'
import { Provider } from 'react-redux'

```


## Create a Redux "slice" reducer with createSlice => create 'counterSlice.js' file and add code  as an example 

``` js

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

```


## Add Slice Reducers to the Store  => update 'store.js'

``` js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

```

