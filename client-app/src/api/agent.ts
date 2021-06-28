import axios, { AxiosResponse } from 'axios';
import { CHANNEL_API_ROUTE } from '../constants/apiRoutes';
import { IChannel } from '../models/channels';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

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

export default {
  Channels,
};
