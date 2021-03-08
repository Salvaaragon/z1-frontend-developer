import { ReduxAction } from '@Store/actions';
import { POST_IMAGE, POST_IMAGE_DONE, RESET } from '@Store/constants/image';

type Status = 'Too Much Glare' | 'Approved' | 'error' | null;

export interface ImageState {
  currentImage: string | null;
  status: Status;
  imageSent: boolean;
}

const initialState: ImageState = {
  currentImage: null,
  status: null,
  imageSent: false,
};

export const ImageReducer = (
  state: ImageState = initialState,
  action: ReduxAction,
): ImageState => {
  switch (action.type) {
    case POST_IMAGE:
      return {
        ...state,
        currentImage: action.payload.image,
        imageSent: false,
      };
    case POST_IMAGE_DONE:
      return {
        ...state,
        status: action.payload.status,
        imageSent: true,
      };
    case RESET:
      return initialState;

    default:
      return state;
  }
};
