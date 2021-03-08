import { postImage } from '@Store/actions/image';
import { RESET } from '@Store/constants/image';
import { RootState } from '@Store/reducers';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CameraContainer, CustomCanvas, CustomVideo } from './styled';

const Camera: React.FC = () => {
  const videoRef: React.RefObject<HTMLVideoElement> = React.useRef(null);
  const canvasRef: React.RefObject<HTMLCanvasElement> = React.useRef(null);
  const history = useHistory();

  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.imageState.status);
  const imageSent = useSelector(
    (state: RootState) => state.imageState.imageSent,
  );

  useEffect(() => {
    dispatch({ type: RESET });
    startCamera();
  }, []);

  useEffect(() => {
    if (status === 'Approved') {
      const timer = setTimeout(() => {
        history.push('/');
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        makePhoto();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [imageSent]);

  const startCamera = useCallback(async () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) videoRef.current.srcObject = stream;
        return new Promise((resolve) => {
          if (videoRef.current) videoRef.current.onplaying = resolve;
        });
      })
      .then(() => {
        makePhoto();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const makePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const width = videoRef.current.videoWidth;
      const height = videoRef.current.videoHeight;

      const ctx = canvasRef.current.getContext('2d');

      canvasRef.current.width = width;
      canvasRef.current.height = height;

      if (ctx) ctx.drawImage(videoRef.current, 0, 0, width, height);

      dispatch(postImage(canvasRef.current.toDataURL('image/png')));
    }
  };

  const getBorderByStatus = useCallback(() => {
    if (status === 'Too Much Glare') return 'solid 1px red';
    if (status === 'Approved') return 'solid 1px green';

    return 'none';
  }, [status]);

  return (
    <CameraContainer
      height="216.75px"
      width="289px"
      border={getBorderByStatus()}
    >
      <CustomVideo autoPlay ref={videoRef}></CustomVideo>
      <CustomCanvas ref={canvasRef}></CustomCanvas>
    </CameraContainer>
  );
};

export default Camera;
