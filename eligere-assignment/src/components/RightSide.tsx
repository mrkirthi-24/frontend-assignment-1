import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  CustomButton,
  SortButton,
  StyledButton,
  UploadButton,
} from "../utils/StyledButtons";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import styled from "@emotion/styled";
import { rowData } from "../utils/createTableData";

const StyledTableHeadCell = styled(TableCell)`
  padding: 10px 0px;
  font-size: 15px;
  font-weight: bold;
`;

const StyledTableCell = styled(TableCell)`
  padding: 10px 0px;
  font-size: 15px;
`;

const StyledText = styled(Typography)`
  padding: 5px 0px;
  background-color: red;
  text-align: center;
  margin-right: 30px;
  color: #ffffff;
  border-radius: 20px;
  text-transform: none;
  font-size: 12px;
`;

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
            <UploadButton
              variant="contained"
              startIcon={<ArrowUpwardIcon color="primary" />}
              sx={{ mr: 1, bgcolor: "#132d78" }}
            >
              Upload Document
            </UploadButton>
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
          <Box
            mt="20px"
            p={2}
            bgcolor="#ffffff"
            height="70vh"
            borderRadius="7px"
          >
            <Typography
              variant="subtitle2"
              display="flex"
              alignItems="center"
              color="#132d78"
              mb={2}
            >
              Home &nbsp; <ArrowRight fontSize="small" /> &nbsp; My Reports
              &nbsp; <ArrowRight fontSize="small" /> &nbsp;{" "}
              <span style={{ color: "#000" }}>Invoices</span>
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
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ textAlign: "left" }}>
                  <TableRow>
                    <StyledTableHeadCell>Trade Reference</StyledTableHeadCell>
                    <StyledTableHeadCell>Your Reference</StyledTableHeadCell>
                    <StyledTableHeadCell>Company Name</StyledTableHeadCell>
                    <StyledTableHeadCell>Invoice Due Date</StyledTableHeadCell>
                    <StyledTableHeadCell>Currency</StyledTableHeadCell>
                    <StyledTableHeadCell>Invoice Value</StyledTableHeadCell>
                    <StyledTableHeadCell>Status</StyledTableHeadCell>
                    <StyledTableHeadCell>Action</StyledTableHeadCell>
                    <StyledTableHeadCell></StyledTableHeadCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowData.map((row) => (
                    <TableRow key={row.tradeRef}>
                      <StyledTableCell component="th" scope="row">
                        {row.tradeRef}
                      </StyledTableCell>
                      <StyledTableCell>{row.yourRef}</StyledTableCell>
                      <StyledTableCell>{row.companyName}</StyledTableCell>
                      <StyledTableCell>{row.invoiceDate}</StyledTableCell>
                      <StyledTableCell>{row.currency}</StyledTableCell>
                      <StyledTableCell>{row.invoiceValue}</StyledTableCell>
                      <StyledTableCell>
                        <StyledText>Pending</StyledText>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#132d78",
                            textTransform: "none",
                            fontSize: 12,
                          }}
                        >
                          Pay
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <DeleteIcon />
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <ButtonGroup
                sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              >
                <CustomButton>Prev</CustomButton>
                <CustomButton>1</CustomButton>
                <CustomButton>2</CustomButton>
                <CustomButton>Next</CustomButton>
              </ButtonGroup>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RightSide;
