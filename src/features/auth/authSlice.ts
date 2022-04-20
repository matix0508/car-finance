import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AuthError,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  signOut,
  Auth,
} from "firebase/auth";
import {auth} from "../.."

interface Error {
  code?: string;
  message?: string;
  name?: string;
}

export interface AuthState {
  user: User | null;
  error: Error | null;
  loading: "idle" | "pending";
}

const initialState: AuthState = {
  user: null,
  error: null,
  loading: "idle",
};

export const loginUser = createAsyncThunk("auth/login", async () => {
    const provider = new GoogleAuthProvider();
  const response = await signInWithPopup(auth, provider);
  return response.user;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.error as Error;
    });
  },
});

export default authSlice.reducer;
