import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://front-exercise.z1.digital/';

const API_CLIENT = axios.create({
  baseURL: API_URL,
});

export type PostImageResponseType = {
  summary: {
    outcome: string;
  };
};

type PostImageType = (
  image: string,
) => Promise<AxiosResponse<PostImageResponseType>>;

export const PostImage: PostImageType = async (image: string) => {
  return await API_CLIENT.post('evaluations', image);
};
