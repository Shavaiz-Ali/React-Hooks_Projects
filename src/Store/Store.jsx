import { configureStore} from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";

const Store = configureStore({
    reducer: {
        users: UserSlice,
    },
});

export default Store

