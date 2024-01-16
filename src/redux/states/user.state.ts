import { createSlice } from "@reduxjs/toolkit";
import { User, LocalStorageEntities } from "@/models";
import { clearLocalStorage, persistLocalStorage } from "@/utilities/localStorage.utility";

const emptyUser: User = {
  id: 0,
  name: "",
  email: "",
};


export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem(LocalStorageEntities.user_info)
    ? JSON.parse(localStorage.getItem(LocalStorageEntities.user_info) as string)
    : emptyUser,
  reducers: {
    createUser: (_state, action) => {
      persistLocalStorage<User>(
        LocalStorageEntities.user_info,
        action.payload
      );
      return action.payload;
    },
    modifyUser: (state, action) => {
      const newState = { ...state, ...action.payload };
      persistLocalStorage<User>(LocalStorageEntities.user_info, newState);
      return newState;
    },
    resetUser: () => {
      clearLocalStorage(LocalStorageEntities.user_info);
      return emptyUser;
    },
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
