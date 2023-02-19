import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid, TextField } from "@mui/material";
import Link from "next/link";

const Register = () => {
  return (
    <div className="py-[100px] px-[20px] bg-white">
      <Card sx={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto"}}>
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
            Sign up for Project Manager
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "18px", textAlign: "center", padding: "20px" }}
          >
            We can take you there as soon as you log in
          </Typography>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" component="p">
                  Username
                </Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Full Name"
                  multiline
                  fullWidth
                />
                <Typography variant="subtitle2" component="p">
                  Please enter your username
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" component="p">
                  Email
                </Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Email"
                  multiline
                  fullWidth
                />
                <Typography variant="subtitle2" component="p">
                  Please enter your Email
                </Typography>
              </Grid>
            </Grid>
            <div className="mt-4">
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
                  Password must not less than 3 characters
                </Typography>
            </div>
            <Grid container spacing={4} sx={{marginTop:"5px"}}>
              <Grid item xs={12} sm={6}>
                <Button sx={{width:"100%", padding:"20px"}} type="submit" variant="contained" color="primary">Sign up</Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" component="p" sx={{fontSize:"18px"}}>
                  Already have account? <Link href="/Login"> Sign in.</Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{marginTop:"50px",justifyContent:"space-between"}}>
              <Grid item sx={{border:"1px solid black", height:"1px", alignItems:"center"}} xs={4} sm={5}>
                <Typography variant="subtitle2" component="div">
                </Typography>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Typography variant="subtitle2" component="div" sx={{fontWeight:"bold", textAlign:"center"}} >
                    OR
                </Typography>
              </Grid>
              <Grid item sx={{border:"1px solid black", height:"1px"}} xs={4} sm={5}>
                <Typography variant="subtitle2" component="div">
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <Button sx={{width:"100%", padding:"20px", textTransform:"capitalize"}} type="submit" variant="contained" color="primary">Sign up with Facebook</Button>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Register;
