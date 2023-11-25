import styled from "@emotion/styled";
import { Avatar, Link, Typography } from "@mui/material";
import NotificationIcon from "@mui/icons-material/NotificationImportantOutlined";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import { CustomButton } from "../utils/StyledButtons";

const Container = styled(Box)`
  background: #051231;
  color: #ffffff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
`;

const StyledText = styled(Link)`
  color: #9fb3cb;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  margin-right: 2rem;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Container>
      <StyledBox>
        <StyledLogo sx={{ mr: 10 }}>LogoK</StyledLogo>
        <StyledText>My Suppliers</StyledText>
        <StyledText>My Buyers</StyledText>
        <StyledText>My Reports</StyledText>
      </StyledBox>
      <StyledBox>
        <NotificationIcon color="primary" sx={{ mr: 5 }} />
        <StyledBox>
          <Avatar sx={{ width: 35, height: 35, fontSize: 15, mr: 2 }}>
            JP
          </Avatar>
          <CustomButton endIcon={<ArrowDownIcon />} sx={{ color: "#ffffff" }}>
            John Paul
          </CustomButton>
        </StyledBox>
      </StyledBox>
    </Container>
  );
};

export default NavBar;
