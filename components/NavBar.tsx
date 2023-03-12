import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import { AppBar } from "@mui/material";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const navItems = ["Login", "Register"];

// const useStyles = makeStyles({
//   navBg: {
//     backgroundColor: "#00113d",
//     padding: "5px",
//   },
// });


function NavBar(props: Props) {
  // const classes = useStyles();

  return (
    <div className="w-[100%] bg-[#00113d] justify-center items-center">
    <AppBar
      component="nav"
      // className={classes.navBg}
      color="primary"
      style={{
        maxWidth: "1300px",
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
            <Button sx={{ color:"#fff" }}>Login</Button>
          </Link>
          <Link href="/Register">
            <Button sx={{ color: "#fff" }}>Register</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
    </div>
  );
}
export default NavBar;
