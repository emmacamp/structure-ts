import { User } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from "./states/user.state";
import { useSelector } from "react-redux";


export interface AppStore {
    user: User;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer
    }
});

export const UserSelectorState = () => useSelector((store: AppStore) => store.user);
