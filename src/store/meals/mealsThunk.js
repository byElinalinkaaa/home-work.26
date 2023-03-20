import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMeaLReq } from '../../api/mealService'

const getMeals = createAsyncThunk(
    'meals/getMeals',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getMeaLReq()
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export default getMeals
