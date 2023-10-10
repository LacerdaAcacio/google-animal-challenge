import { NotFoundProps } from "../../../../types/PropsData";
import { StyledNotFoundContainer } from "../../styles";

function ResultNotFound({ label, boldLabel }: NotFoundProps) {
  return (
    <StyledNotFoundContainer>
      {label} <b>{boldLabel}</b>.
    </StyledNotFoundContainer>
  );
}

export default ResultNotFound;
