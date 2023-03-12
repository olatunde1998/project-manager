import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const homebodyVariants ={
  hidden:{
    opacity:0,
    y:'100vw'
  },
  visible:{
    opacity:1,
    y:0,
    transition:{type:'spring', delay:2, duration: 5}
  },
  exit:{
    x:'-100vw',
    transition:{ease: "easeInOut"}
  }
}
const softwareVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 4,
      duration: 5,
    },
  },
};

const planworkVariants = {
  hidden: {
    opacity:0,
    x: "-100vw",
  },
  visible: {
    opacity:1,
    x:0,
    transition: {
      type: "spring",
      delay: 4.5,
      duration: 10,
    },
  },
};
const planningVariants ={
  hidden:{
    opacity: 0,
    x: '100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{type:'spring', delay: 5, duration: 50}
  }
}

const HomeBodySection = () => {
  return (

      <motion.div variants={homebodyVariants} initial='hidden' animate='visible' className="bg-white text-[#212529] px-12 xl:max-w-[1440px] flex flex-col mr-[auto] ml-[auto]">
        <motion.div
          variants={softwareVariants}
          initial="hidden"
          animate="visible"
          className="text-center my-8 py-20"
        >
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
        </motion.div>
        <motion.div
          variants={planworkVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[1024px] ml-[auto] mr-[auto]"
        >
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
        </motion.div>
        <motion.div variants={planningVariants} initial='hidden' animate='visible' className="max-w-[1024px] ml-[auto] mr-[auto]">
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
                  {`Get Started It's Free`}
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
        </motion.div>
      </motion.div>
 
  );
};

export default HomeBodySection;
