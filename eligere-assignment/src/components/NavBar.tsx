import styled from "@emotion/styled";
import { Avatar, Button, Link, Typography } from "@mui/material";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";

const NavBar = () => {
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
    font-size: 0.9rem;
    cursor: pointer;
    margin-right: 2rem;
    text-decoration: none;
  `;

  return (
    <Container>
      <StyledBox>
        <StyledLogo sx={{ mr: 10 }}>LogoK</StyledLogo>
        <StyledText>My Suppliers</StyledText>
        <StyledText>My Buyers</StyledText>
        <StyledText>My Reports</StyledText>
      </StyledBox>
      <StyledBox>
        <NotificationImportantIcon sx={{ mr: 5, color: "blue" }} />
        <StyledBox>
          <Avatar sx={{ width: 35, height: 35, fontSize: 15, mr: 2 }}>
            JP
          </Avatar>
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ textTransform: "none", fontSize: "0.9rem", color: "#9fb3cb" }}
          >
            John Paul
          </Button>
        </StyledBox>
      </StyledBox>
    </Container>
  );
};

export default NavBar;
