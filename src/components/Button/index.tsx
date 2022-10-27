import React from "react";

import { StyledContainer } from "./Styled";

const Button = (props: any) => {
  const { dataIn } = props;
  return (
    <StyledContainer
      {...dataIn?.styles}
      {...dataIn?.icons}
      onClick={dataIn?.action}
      className="buttonroot"
    >
      {dataIn?.label}
    </StyledContainer>
  );
};

export default Button;
