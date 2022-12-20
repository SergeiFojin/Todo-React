import styled from 'styled-components';
import { colors } from '../../colors';

export const Body = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  font-size: 100px;
  line-height: 102px;
  color: ${colors.headerColor};
  font-family: Arial;
`;
