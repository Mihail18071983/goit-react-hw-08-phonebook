import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  showErrorMessage,
  showInfoMessage,
  showSuccessMessage,
} from 'shared/utils/notifications';

export const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await instance.post('/users/refresh', {
          refreshToken,
        });
        console.log('accessToken in interseptor', data.accessToken);
        setAuthHeader(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        console.log('config request',error.config)
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/register', credentials);
      // After successful registration, add the token to the HTTP header
      console.log('accesssToken in regisry', data.accessToken);
      setAuthHeader(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      showSuccessMessage('Successfully registered. Welcome!');
      return {
        user: {
          name: data.name,
          email: data.email,
        },
        token: data.accessToken,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      showSuccessMessage('Successfully loggined. Welcome back');
      return {
        user: {
          name: data.name,
          email: data.email,
        },
        token: data.accessToken,
      };
    } catch (err) {
      showErrorMessage('Enter correct login and password!');
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    showErrorMessage('Application logout error');
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log('persisted token: ', persistedToken);

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await instance.get('/users/current');
      showInfoMessage('The last session is resumed');
      return res.data;
    } catch (error) {
      showErrorMessage('User not found');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
