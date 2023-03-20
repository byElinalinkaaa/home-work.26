import thunk from 'redux-thunk'
import authSlilce from './auth/auth.slice'
import { basketSlice } from './basket/basketSlice'
import { mealsSlice } from './meals/mealsSlice'
import { uiSlice } from './ui/uiSlice'

const { combineReducers, createStore, applyMiddleware } = require('redux')

const rootReducer = combineReducers({
    [mealsSlice.name]: mealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [uiSlice.name]: uiSlice.reducer,
    [authSlilce.name]: authSlilce.reducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
