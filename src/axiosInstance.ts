import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'https://newdemostock.gopos.pl/',
  headers: {
    Authorization:
      process.env.REACT_APP_AUTORISATION_KEY ||
      'fd9ba9e1-0788-4e8f-ac46-a43df43e205e',
  },
});
