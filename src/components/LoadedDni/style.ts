import styled from 'styled-components';

export const LoadedDniContainer = styled.div`
  position: relative;
`;

export const StatusIconContainer = styled.div`
  height: 30px;
  width: 105px;
  border-radius: 4px;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  bottom: -10px;

  &.valid {
    background-color: #69cc8b;
  }

  &.error {
    background-color: #c00000;
  }
`;
