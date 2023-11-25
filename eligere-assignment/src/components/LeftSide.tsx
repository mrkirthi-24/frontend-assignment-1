import { Box, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import ReceiptIcon from "@mui/icons-material/Receipt";
import styled from "@emotion/styled";

const LeftSide = () => {
  const StyledButton = styled(Button)`
    text-transform: none;
    width: 100%;
    color: #132d78;
    font-size: 0.9rem;
    padding: 0.5rem 0rem;
    border-radius: 7px;
  `;

  return (
    <Box p="20px 20px 0px 10px">
      <StyledButton
        variant="outlined"
        startIcon={<AddIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          bgcolor: "#ffffff",
          fontWeight: "bold",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.6)",
        }}
      >
        &nbsp; Create New &nbsp;
      </StyledButton>
      <StyledButton
        startIcon={<ReceiptIcon />}
        sx={{
          mt: "20px",
          justifyContent: "start",
          bgcolor: "rgba(0,0,0,0.1)",
          ".MuiButton-startIcon": {
            ml: "25px",
          },
        }}
      >
        &nbsp;Invoices
      </StyledButton>
    </Box>
  );
};

export default LeftSide;
