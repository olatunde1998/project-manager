import Head from "next/head";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid, TextField } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

const loginVariants ={
  hidden:{
    opacity:0,
    y:'100vw'
  },
  visible:{
    opacity:1,
    y:0,
    transition:{delay:3, duration:3, type:'spring'}
  }
}
const Login = () => {
  return (
    <>
      <Head>
        <title>Project Manager | Login </title>
        <meta name="description" content="Project Manager App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div variants={loginVariants} initial='hidden'animate='visible' className="py-[100px] px-[20px] bg-white">
        <Card sx={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
          <CardActionArea>
            <Typography
              component="p"
              sx={{
                backgroundColor: "#00113d",
                color: "white",
                fontSize: "20px",
                textAlign: "center",
                fontWeight: "700",
                padding: "20px",
              }}
            >
              Login to Project Manager
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: "18px", textAlign: "center", padding: "20px" }}
            >
              We can take you there as soon as you log in
            </Typography>
            <CardContent>
              <div className="mb-4">
                <Typography variant="h6" component="p">
                  Username
                </Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Username"
                  multiline
                  fullWidth
                />
                <Typography variant="subtitle2" component="p">
                  Please enter your Username
                </Typography>
              </div>
              <div className="mb-8">
                <Typography variant="h6" component="p">
                  Password
                </Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Password"
                  multiline
                  fullWidth
                />
                <Typography variant="subtitle2" component="p">
                  Please enter your Password
                </Typography>
              </div>

              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} className="">
                  <Button
                    sx={{ width: "100%", padding: "10px" }}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} className="">
                  <Button
                    sx={{ width: "100%", padding: "10px" }}
                    variant="outlined"
                  >
                    Sign up for manager
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                sx={{ marginTop: "50px", justifyContent: "space-between" }}
              >
                <Grid
                  item
                  sx={{
                    border: "1px solid black",
                    height: "1px",
                    alignItems: "center",
                  }}
                  xs={4}
                  sm={5}
                >
                  <Typography variant="subtitle2" component="div"></Typography>
                </Grid>
                <Grid item xs={4} sm={2}>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    OR
                  </Typography>
                </Grid>
                <Grid
                  item
                  sx={{ border: "1px solid black", height: "1px" }}
                  xs={4}
                  sm={5}
                >
                  <Typography variant="subtitle2" component="div"></Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <Button
                    sx={{
                      width: "100%",
                      padding: "20px",
                      textTransform: "capitalize",
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Login with Facebook
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
    </>
  );
};

export default Login;
