import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/styles";
import { maxWidth } from "@mui/system";
import Link from "next/link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const navItems = ["Login", "Register"];

const useStyles = makeStyles({
  navBg: {
    backgroundColor: "#00113d",
    padding: "5px",
  },
});

function NavBar(props: Props) {
  const classes = useStyles();

  return (
    // <div className="border-2 border-red-800">
    <AppBar
      component="nav"
      className={classes.navBg}
      color="primary"
      sx={{
        // border: "2px solid green",
        maxWidth: "1440px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Toolbar>
        <Link href="/" style={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Manager
          </Typography>
        </Link>
        <Box>
          <Link href="/Login">
            {" "}
            <Button sx={{ color: "#fff" }}>Login</Button>
          </Link>
          <Link href="/Register">
            <Button sx={{ color: "#fff" }}>Register</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
    // </div>
  );
}
export default NavBar;
