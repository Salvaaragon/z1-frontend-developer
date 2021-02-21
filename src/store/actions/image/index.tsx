import { POST_IMAGE, POST_IMAGE_DONE } from '@Store/constants/image';
import { ReduxAction } from '..';

export const postImage = (image: string): ReduxAction => {
  return {
    type: POST_IMAGE,
    payload: {
      image: image,
    },
  };
};

export const postImageDone = (image: string, status: string): ReduxAction => {
  return {
    type: POST_IMAGE_DONE,
    payload: {
      image: image,
      status: status,
    },
  };
};
