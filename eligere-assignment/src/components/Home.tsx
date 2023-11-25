import { Grid } from "@mui/material";
import LeftSide from "./LeftSide";
import NavBar from "./NavBar";
import RightSide from "./RightSide";

const Home = () => {
  return (
    <>
      <NavBar />
      <Grid container bgcolor="#eef3fa" height="90vh">
        <Grid item xs={2}>
          <LeftSide />
        </Grid>
        <Grid item xs={10}>
          <RightSide />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
