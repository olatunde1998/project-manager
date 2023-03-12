import { Typography } from "@mui/material";
import React from "react";

const Item = () => {
  const dragStarted = () =>{
    // e.prevent.default()
    console.log("drag has started")
  }
  return (
    <div>
      <li draggable onDragStart={(e)=>dragStarted(e)}>
        <div className="w-[300px] h-[70px] bg-[#243260]  mt-2 border-2 border-[#30363d] rounded-lg p-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-2 mr-2 rounded-full border-2 border-green-600  p-2"></div>
              <Typography variant="body1" component="p">
                Item 1
              </Typography>
            </div>
          </div>
          <Typography variant="body1" component="p">
            {`This item hasn't been started`}
          </Typography>
        </div>
      </li>
    </div>
  );
};

export default Item;
