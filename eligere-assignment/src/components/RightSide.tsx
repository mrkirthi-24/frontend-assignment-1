import {
  Box,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { SortButton, StyledButton } from "../utils/StyledButtons";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const RightSide = () => {
  return (
    <Box p="20px 10px 0px 0px">
      <Grid container>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <TextField
            placeholder="Quotation"
            fullWidth
            sx={{
              bgcolor: "#ffffff",
              mr: "20px",
              ".MuiInputBase-input": { p: "15px 0px" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box display="flex" width="50%">
            <StyledButton
              variant="contained"
              startIcon={<ArrowUpwardIcon color="primary" />}
              sx={{ mr: 1, bgcolor: "#132d78" }}
              style={{ color: "white" }}
            >
              Upload Document
            </StyledButton>
            <StyledButton
              variant="outlined"
              startIcon={<LocalAtmIcon />}
              sx={{ bgcolor: "#ffffff" }}
            >
              Make Payment
            </StyledButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mt="20px" p={2} bgcolor="#ffffff">
            <Typography
              variant="subtitle2"
              display="flex"
              alignItems="center"
              color="#132d78"
              mb={2}
            >
              Home &nbsp; <ArrowRight fontSize="small" /> &nbsp; My Reports
              &nbsp; <ArrowRight fontSize="small" /> &nbsp; Invoices
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h4" fontWeight="bold">
                Invoices
              </Typography>
              <Box display="flex">
                <SortButton
                  variant="outlined"
                  endIcon={<ArrowDown />}
                  sx={{ mr: 1 }}
                >
                  Invoice Type
                </SortButton>
                <SortButton variant="outlined" endIcon={<ArrowDown />}>
                  Date
                </SortButton>
              </Box>
            </Box>
            <Divider sx={{ mt: 2 }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RightSide;
