import { ReduxAction } from '@Store/actions';
import { POST_IMAGE, POST_IMAGE_DONE, RESET } from '@Store/constants/image';

type Status = 'Too Much Glare' | 'Approved' | 'error' | null;

export interface ImageState {
  currentImage: string | null;
  status: 'Too Much Glare' | 'Approved' | 'error' | null;
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
      return {
        status: null,
        imageSent: false,
        currentImage: null,
      };

    default:
      return state;
  }
};

type GetCurrentImageType = (state: ImageState) => string | null;
type GetStatusType = (state: ImageState) => Status;
type GetImageSentType = (state: ImageState) => boolean;

export const getCurrentImage: GetCurrentImageType = (state: ImageState) =>
  state.currentImage;
export const getStatus: GetStatusType = (state: ImageState) => state.status;
export const getImageSent: GetImageSentType = (state: ImageState) =>
  state.imageSent;
