import { AxiosResponse } from 'axios';

export type PostImageResponseType = {
  summary: {
    outcome: string;
  };
};

export type PostImageType = (
  image: string,
) => Promise<AxiosResponse<PostImageResponseType>>;
