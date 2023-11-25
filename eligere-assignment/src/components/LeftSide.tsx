import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { InvoiceButton, StyledButton } from "../utils/StyledButtons";

const LeftSide = () => {
  return (
    <Box p="20px 20px 0px 10px">
      <StyledButton
        variant="outlined"
        startIcon={<AddIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ bgcolor: "#ffffff" }}
      >
        &nbsp; Create New &nbsp;
      </StyledButton>
      <InvoiceButton
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
      </InvoiceButton>
    </Box>
  );
};

export default LeftSide;
