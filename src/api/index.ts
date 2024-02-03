import APIClient from './api-client';
import { API_BASE_URL } from './constants';

const client = new APIClient(API_BASE_URL);

export { client };
