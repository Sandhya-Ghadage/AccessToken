import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login",
    async ({ username, password }, { rejectWithValue }) => {
        try{
            let res = await axios.post('https://dummyjson.com/auth/login', {
                username, password
            });
            console.log(res);
            localStorage.setItem("accessToken",JSON.stringify(res.data.accessToken))
            console.log(localStorage.getItem("accessToken"));
        }
        catch(err){
            return rejectWithValue(err.res.data)
        }
    }
)
const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
        accessToken: null,
        error: null,
        status: "Pending"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.status = "Loading"
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.error = "Your request is failed"
            })
    }
})

export default UserSlice.reducer;