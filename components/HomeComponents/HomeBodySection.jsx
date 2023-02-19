import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HomeBodySection = () => {
  return (
    <div className="bg-white text-[#212529] px-12">
      <div className="text-center my-8 py-20">
        <Typography variant="h5">
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
          Manager Software is built for every member of your team to plan, track
          and release great software
        </Typography>
      </div>
      <div>
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
              <Typography variant="body1">Plan</Typography>
              <Typography variant="body1">
                Create user stories and issues, plan sprints, and distribute
                task across your team
              </Typography>
            </div>
            <div>
              <Typography variant="body1">Work</Typography>
              <Typography variant="body1">
                Create user stories and issues, plan sprints, and distribute
                task across your team
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: "space-around",
            border: "1px solid white",
            paddingBottom: "100px",
          }}
        >
          <Grid item sm={4}>
            <Image
              src="/planning-pics1.webp"
              width={350}
              height={350}
              alt="software team"
            />
          </Grid>
          <Grid item sm={4}>
            <div>
              <Typography variant="body1">Work</Typography>
              <Typography variant="body1">
                Create user stories and issues, plan sprints, and distribute
                task across your team
              </Typography>
            </div>
          </Grid>
          <Grid item sm={4}>
            <Image
              src="/planning-pics2.webp"
              width={350}
              height={350}
              alt="software team"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HomeBodySection;
