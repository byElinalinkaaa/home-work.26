/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit'
import {
    addToBasket,
    deleteBasketItem,
    getBasket,
    updateBasketItem,
} from './basketThunk'

// export const getBasket = createAsyncThunk(
//     'basket/getBasket',
//     async (_, { rejectWithValue }) => {
//         try {
//             const { data } = await getBasketReq('/basket')
//             return data.data.items
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// export const addToBasket = createAsyncThunk(
//     'basket/addNewBasket',
//     async (newItem, { dispatch, rejectWithValue }) => {
//         try {
//             await postAddToBasketReq(newItem)
//             return dispatch(getBasket())
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// export const updateBasketItem = createAsyncThunk(
//     'basket/updateBasket',
//     async ({ id, amount }, { dispatch, rejectWithValue }) => {
//         try {
//             await putUpdateBasketReq(id, amount)
//             return dispatch(getBasket())
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// export const deleteBasketItem = createAsyncThunk(
//     'basket/deleteBasket',
//     async (id, { dispatch, rejectWithValue }) => {
//         try {
//             await deleteBasketReq(id)
//             return dispatch(getBasket())
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// export const orderSubmit = createAsyncThunk(
//     'basket/orderSubmit',
//     async (orderData, { dispatch, rejectWithValue }) => {
//         try {
//             await orderSubmitReq(orderData)

//             return dispatch(getBasket())
//         } catch (error) {
//             throw rejectWithValue(error)
//         }
//     }
// )

export const basketActionTypes = {
    ADD_ITEM_SUCCESS: 'ADD_ITEM_SUCCESS',
    GET_BUSKET_SUCCESSS: 'GET_BUSKET_SUCCESSS',
}

const initialState = {
    items: [],
    isLoading: false,
    error: '',
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        getBasketStarted(state, action) {
            state.items = action.payload
            state.isLoading = true
        },
        getBasketSuccess(state, action) {
            state.items = action.payload
            state.isLoading = false
            state.error = ''
        },
        getBasketFailed(state, action) {
            state.items = action.payload
            state.error = 'Something went wrong'
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getBasket.fulfilled, (state, action) => {
            state.items = action.payload
            state.isLoading = false
            state.error = ''
        })

        builder.addCase(getBasket.pending, (state, action) => {
            state.isLoading = true
            state.error = action.payload
        })

        builder.addCase(getBasket.rejected, (state) => {
            state.isLoading = false
            state.error = 'error'
        })

        builder.addCase(addToBasket.fulfilled, (state) => {
            state.isLoading = false
            state.error = ''
        })

        builder.addCase(addToBasket.pending, (state) => {
            state.isLoading = true
            state.error = ''
        })

        builder.addCase(addToBasket.rejected, (state) => {
            state.isLoading = false
            state.error = 'error'
        })

        builder.addCase(updateBasketItem.fulfilled, (state) => {
            state.isLoading = false
            state.error = ''
        })

        builder.addCase(updateBasketItem.pending, (state) => {
            state.isLoading = true
            state.error = ''
        })

        builder.addCase(updateBasketItem.rejected, (state) => {
            state.isLoading = false
            state.error = 'error'
        })

        builder.addCase(deleteBasketItem.fulfilled, (state) => {
            state.isLoading = false
            state.error = ''
        })

        builder.addCase(deleteBasketItem.pending, (state) => {
            state.isLoading = true
            state.error = ''
        })

        builder.addCase(deleteBasketItem.rejected, (state) => {
            state.isLoading = false
            state.error = 'error'
        })
    },
})

export const basketActions = basketSlice.actions
