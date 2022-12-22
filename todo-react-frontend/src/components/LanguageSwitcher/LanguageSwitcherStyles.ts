import styled from 'styled-components';
import { colors } from '../../colors';

export const SwitchLanguageWrap = styled.div`
`;

export const SwitchLanguageButton = styled.button`
  border: none;
  padding: 5px 10px;
  background-color: ${colors.whitesmoke};
  font-size: 14px;
  color: ${colors.dimgray};
  font-family: Arial;
  cursor: pointer;


  &:not(:first-child) {
    margin-left: 10px;
  }

  &:hover {
    border: 1px solid ${colors.footerButtonFocus};
    border-radius: 3px;
    padding: 4px 9px;
  }

  &:disabled {
    border: 1px solid ${colors.footerButtonFocus};
    border-radius: 3px;
    padding: 4px 9px;
    cursor: auto;
  }
`;
