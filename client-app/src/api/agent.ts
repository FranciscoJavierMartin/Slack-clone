import axios, { AxiosResponse } from 'axios';
import {
  CHANNEL_API_ROUTE,
  LOGIN_API_ROUTE,
  REGISTER_API_ROUTE,
  CURRENT_USER_API_ROUTE,
} from '../constants/apiRoutes';
import { IChannel } from '../models/channels';
import { history } from '../App';
import { toast } from 'react-toastify';
import { IUser, IUserFormValues } from '../models/users';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

axios.interceptors.response.use(undefined, (error) => {
  const { status } = error.response;

  if (error.message === 'Network Error' && !error.response) {
    toast.error('Network Error - Make sure API is running');
  } else {
    if (status === 404) {
      history.push('/not-found');
    } else if (status === 500) {
      toast.error('Server error - Check the terminal');
    }
  }
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const Channels = {
  list: () => request.get<IChannel[]>(CHANNEL_API_ROUTE),
  create: (channel: IChannel) => request.post(CHANNEL_API_ROUTE, channel),
};

const User = {
  login: (userForm: IUserFormValues): Promise<IUser> =>
    request.post(LOGIN_API_ROUTE, userForm),
  register: (userForm: IUserFormValues): Promise<IUser> =>
    request.post(REGISTER_API_ROUTE, userForm),
  currentUser: (): Promise<IUser> => request.get(CURRENT_USER_API_ROUTE),
};

export default {
  Channels,
  User,
};
