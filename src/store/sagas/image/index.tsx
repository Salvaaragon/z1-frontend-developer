import { PostImage, PostImageResponseType } from '@Services/api';
import { ReduxAction } from '@Store/actions';
import { postImageDone } from '@Store/actions/image';
import { POST_IMAGE } from '@Store/constants/image';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* postImage(action: ReduxAction) {
  try {
    const response: { data: PostImageResponseType } = yield call(
      PostImage,
      action.payload,
    );
    yield put(
      postImageDone(action.payload.image, response.data.summary.outcome),
    );
  } catch (error) {
    postImageDone(action.payload.image, 'error');
  }
}

export default function* imageSagas() {
  yield all([yield takeLatest(POST_IMAGE, postImage)]);
}
