/* eslint-disable prettier/prettier */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { signInRequest, signUpRequest } from '../../api/authServise'
import { STORAGE_KEYS } from '../../lib/constants/common'

export const signUp = createAsyncThunk(
    'auth/signup',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await signUpRequest(payload)
            const userData = data.data
            localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(userData))
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const signIn = createAsyncThunk(
    'auth/signin',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await signInRequest(payload)
            localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data.data))
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
