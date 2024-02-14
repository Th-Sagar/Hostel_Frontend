import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
    "createUser",
    async (data,{rejectWithValue}) => {
        console.log(data);
        const response = await fetch("http://localhost:5000/api/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        try {
            const result = await response.json();
            console.log(result);
            
        } catch (error) {
            return rejectWithValue({ message: error.message });
        }
    }
);

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const userDetailSlice = createSlice({
    name: "userDetail",
    initialState,
    reducers: {
        userCreated(state, action) {
            state.users.push(action.payload);
        },
        userCreationPending(state) {
            state.loading = true;
        },
        userCreationFulfilled(state) {
            state.loading = false;
        },
        userCreationRejected(state, action) {
            state.loading = false;
            state.error = action.payload.message;
        },
    },

});

export const { userCreated, userCreationPending, userCreationFulfilled, userCreationRejected } = userDetailSlice.actions;

// Reducer function to handle actions
export const userDetailReducer = userDetailSlice.reducer;

export default userDetailSlice; // Exporting the slice itself
