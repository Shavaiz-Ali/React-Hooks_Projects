import {createSlice} from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser(state, action){},
        removeUser(state, action){},
        DeleteUsers(state, action){},
    }
})
export default  UserSlice.reducer