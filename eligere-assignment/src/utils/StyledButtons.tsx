import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CustomButton = styled(Button)`
  text-transform: none;
  font-size: 0.9rem;
  border-radius: 7px;
`;

const baseStyledButtonStyles = `
  width: 100%;
  padding: 0.7rem 0rem;
  font-weight: bold;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
`;

export const BaseStyledButton = styled(CustomButton)`
  ${baseStyledButtonStyles}
`;

export const StyledButton = styled(BaseStyledButton)`
  color: #132d78;
`;

export const UploadButton = styled(BaseStyledButton)`
  color: #ffffff;
`;

export const SortButton = styled(CustomButton)`
  color: #132d78;
  font-weight: bold;
  padding: 0.5rem 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
`;

export const InvoiceButton = styled(CustomButton)`
  color: #132d78;
  width: 100%;
  padding: 0.7rem 0rem;
`;
