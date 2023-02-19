import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HomeBodySection = () => {
  return (
    <div className="bg-white">
      <div className="bg-white text-[#212529] px-12 xl:max-w-[1440px] flex flex-col mr-[auto] ml-[auto]">
        <div className="text-center my-8 py-20">
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", fontSize: "32px", marginBottom: "10px" }}
          >
            The best Software teams ship early and often
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              maxWidth: "900px",
              marginRight: "auto",
              marginLeft: "auto",
              fontSize: "20px",
              maxWidth: "750px",
            }}
          >
            Manager Software is built for every member of your team to plan,
            track and release great software
          </Typography>
        </div>
        <div className="max-w-[1024px] ml-[auto] mr-[auto]">
          <Grid
            container
            spacing={4}
            sx={{
              justifyContent: "center",
              paddingBottom: "100px",
            }}
          >
            <Grid item sm={6}>
              <Image
                src="/software-pics.webp"
                width={350}
                height={350}
                alt="software team"
              />
            </Grid>
            <Grid item sm={6}>
              <div className="mb-8">
                <Typography variant="body1" sx={{ fontWeight: "700" }}>
                  Plan
                </Typography>
                <Typography variant="body1">
                  Create user stories and issues, plan sprints, and distribute
                  task across your team
                </Typography>
              </div>
              <div>
                <Typography variant="body1" sx={{ fontWeight: "700" }}>
                  Work
                </Typography>
                <Typography variant="body1">
                  Create user stories and issues, plan sprints, and distribute
                  task across your team
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="max-w-[1024px] ml-[auto] mr-[auto]">
          <Grid
            container
            spacing={4}
            sx={{
              justifyContent: "space-around",
              
              paddingBottom: "100px",
            }}
          >
            <Grid item sm={4}>
              <div>
                <Image
                  src="/planning-pics1.webp"
                  width={350}
                  height={350}
                  alt="software team"
                />
              </div>
            </Grid>
            <Grid item sm={4}>
              <div className="text-center">
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "700", marginBottom: "10px" }}
                >
                  Start Planning Today
                </Typography>
                <Typography variant="body1">
                  Sign up and become one of the millions of people around the
                  world and using Manager to get more done.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "30px",
                    padding: "10px",
                    textTransform: "capitalize",
                  }}
                >
                  Get Started It's Free!
                </Button>
              </div>
            </Grid>
            <Grid item sm={4}>
              <div>
                <Image
                  src="/planning-pics2.webp"
                  width={350}
                  height={350}
                  alt="software team"
                
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HomeBodySection;
