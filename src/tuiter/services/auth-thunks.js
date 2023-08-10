import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
  "user/login",
  async (credentials) => {
    const user = await authService.login(credentials);
    return user;
  }
);

export const profileThunk = createAsyncThunk(
  "auth/profile",
  async () => {
    const response = await authService.profile();
    return response.data;
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async () => {
    await authService.logout();
  }
);

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (user) => {
    const response = await authService.updateUser(user);
    return response.data;
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async ({ username, password }) => {
    const response = await authService.register({ username, password });
    return response.data;
  }
);
