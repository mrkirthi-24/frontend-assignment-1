import { Box, Typography } from "@mui/material";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { InvoiceButton, StyledButton } from "../utils/StyledButtons";

const LeftSide = () => {
  return (
    <Box p="20px 20px 0px 10px" height="85vh">
      <StyledButton
        variant="outlined"
        startIcon={<AddIcon />}
        endIcon={<ArrowDownIcon />}
        sx={{ bgcolor: "#ffffff" }}
      >
        &nbsp; Create New &nbsp;
      </StyledButton>
      <InvoiceButton
        startIcon={<ReceiptIcon />}
        sx={{
          mt: "20px",
          justifyContent: "start",
          bgcolor: "#d8e2f0",
          ".MuiButton-startIcon": {
            ml: "25px",
          },
        }}
      >
        &nbsp;Invoices
      </InvoiceButton>
      <Box position="absolute" bottom={5}>
        <Typography color="grey" fontSize={12} ml={2.5}>
          © 2023, 2024. LogoK Pvt. Ltd.
        </Typography>
      </Box>
    </Box>
  );
};

export default LeftSide;
