import { Grid } from "@mui/material";
import React from "react";
import {
  MdLockOutline,
  MdMoreHoriz,
  MdOutlineInsertChartOutlined,
} from "react-icons/md";
import { FaChartLine } from "react-icons/fa";

const ProjectHeading = () => {
  return (
    <Grid sx={{marginBottom:"2px", marginTop:"60px"}} container spacing={2}>
      <Grid item xs={6}>
        <div className="p-2 flex items-center">
          <MdLockOutline />
          <p className="ml-2 text-[14px] font-bold">Projects Manager</p>
        </div>
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
        <div className="p-2 bg-gray-600 flex justify-end mr-4">
          <div className="mx-2">
            <MdOutlineInsertChartOutlined />
          </div>
          <div className="mx-2">
            <FaChartLine />
          </div>
          <div className="mx-2">
            <MdMoreHoriz />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProjectHeading;
