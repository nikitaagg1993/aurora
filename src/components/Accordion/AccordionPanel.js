import styled, { css } from "styled-components";
import { node } from "prop-types";

import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import COLORS from "../../theme/colors";
import constants from "../../theme/constants";

const AccordionPanel = styled.div`
  max-height: 0;
  overflow: hidden;
  color: ${COLORS.blackPearl};

  && ::before {
    background: ${colors.diatomite};
    content: " ";
    display: flex;
    height: 1px;
    margin-left: 16px;
    margin-right: 16px;
  }

  &&:first-child::before {
    width: 50px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: ${colors.white.base};
      max-height: 600px;
      transition: max-height 0.3s ${constants.easing.easeInOutQuad},
        opacity 0.3s ${constants.easing.easeInOutQuad} 0.2s;
      opacity: 1;
    `} ${({ isOpen }) =>
    !isOpen &&
    css`
      transition: max-height 0.3s ${constants.easing.easeInQuad},
        opacity 0.1s ${constants.easing.easeInQuad};
      opacity: 0;
    `};
`;

AccordionPanel.propTypes = {
  children: node
};

export default AccordionPanel;
