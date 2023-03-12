import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Image from "next/image";

const heroVariants = {
  hidden: {
    opacity: 1,
    x: "100vw",
  },
  visible: {
    x: 0,
    opacity: 0.9,
    transition: { delay: 2, duration: 3, type: "string"},
  },
};

const Hero = () => {
  return (
      <motion.div variants={heroVariants} initial='hidden' animate='visible' className="xl:max-w-[1440px] flex flex-col mr-[auto] ml-[auto]">
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: "space-around",
            backgroundColor: "#00113d",
            paddingTop: "100px",
            paddingBottom: "100px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
          className="sm:flex"
        >
          <Grid item>
            <div className="max-w-[390px]">
              <Typography variant="h5" sx={{ color: "white" }}>
                The #1 project management tool for software development used by
                agile teams
              </Typography>
              <Button
                color="secondary"
                variant="contained"
                sx={{
                  marginTop: "30px",
                  padding: "20px",
                  textTransform: "capitalize",
                }}
              >
                {`Sign Up - It's free`}
              </Button>
            </div>
          </Grid>
          <Grid item>
            <Image
              src="/hero-pics.webp"
              width={300}
              height={400}
              alt="hero pics"
            />
          </Grid>
        </Grid>
      </motion.div>

  );
};

export default Hero;
