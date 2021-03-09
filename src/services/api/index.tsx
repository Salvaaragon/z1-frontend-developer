import axios from 'axios';
import { PostImageType } from './types';

const API_URL = 'https://front-exercise.z1.digital/';

const API_CLIENT = axios.create({
  baseURL: API_URL,
});

export const PostImage: PostImageType = async (image: string) => {
  return await API_CLIENT.post('evaluations', image);
};
