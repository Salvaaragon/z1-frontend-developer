import { postImage } from '@Store/actions/image';
import { RESET } from '@Store/constants/image';
import { RootState } from '@Store/reducers';
import { ImageState, getStatus, getImageSent } from '@Store/reducers/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CameraContainer, CustomCanvas, CustomVideo } from './styled';

const Camera: React.FC = () => {
  const [cameraLoaded, setCameraLoaded] = useState(false);

  const videoRef: React.RefObject<HTMLVideoElement> = React.useRef(null);
  const canvasRef: React.RefObject<HTMLCanvasElement> = React.useRef(null);
  const history = useHistory();

  const dispatch = useDispatch();
  const imageState: ImageState = useSelector(
    (state: RootState) => state.imageState,
  );

  const status = getStatus(imageState);
  const imageSent = getImageSent(imageState);

  useEffect(() => {
    dispatch({ type: RESET });
    startCamera();
  }, []);

  useEffect(() => {
    if (cameraLoaded === true) makePhoto();
  }, [cameraLoaded]);

  useEffect(() => {
    if (imageSent === true && status !== 'Approved') makePhoto();
  }, [imageSent]);

  useEffect(() => {
    if (status === 'Approved') {
      const timer = setTimeout(() => {
        history.push('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const startCamera = async () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) videoRef.current.srcObject = stream;
        return new Promise((resolve) => {
          if (videoRef.current) videoRef.current.onplaying = resolve;
        });
      })
      .then(() => setCameraLoaded(true))
      .catch((error) => {
        console.log(error);
      });
  };

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

  const getBorderByStatus = () => {
    if (status === 'Too Much Glare') return 'solid 1px red';
    if (status === 'Approved') return 'solid 1px green';

    return 'none';
  };

  return (
    <CameraContainer height="179px" width="289px" border={getBorderByStatus()}>
      <CustomVideo autoPlay ref={videoRef}></CustomVideo>
      <CustomCanvas ref={canvasRef}></CustomCanvas>
    </CameraContainer>
  );
};

export default Camera;
