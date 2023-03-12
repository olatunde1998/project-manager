import {
  MdFilterList,
  MdMoreHoriz,
  MdOutlineAdd,
  MdOutlineInsertChartOutlined,
} from "react-icons/md";
import View from "components/projectComponents/View";
import { Grid,TextField, Typography } from "@mui/material";
import Item from "./Item";

const Filter = () => {
  const draggingOver = () =>{
    console.log("Dragging over now")
  }
  const dragDropped = () =>{
    console.log("You have dropped")

  }
  return (
    <div className="h-full">
      <Grid container>
        <Grid
          item
          className="p-2 ml-2 border-2 border-[#30363d] bg-[#243260] flex items-center"
        >
          <div className="mr-2">
            <MdOutlineInsertChartOutlined size={24} />
          </div>
          <div className="mr-2">View 1</div>
          <div className="">
            <View />
          </div>
        </Grid>
        <Grid
          sx={{
            border: "2px solid #30363d",
            backgroundColor: "#243260",
            color: "white",
            paddingLeft: "4px",
          }}
          item
          xs={12}
        >
          <div className="flex items-center">
            <MdFilterList size={24} style={{ color: "white" }} />
            <div className="w-full">
              <TextField
                // sx={{height:"2px"}}
                size="small"
                className="w-full text-green-800"
                type="text"
                placeholder="Filter by keyword or by field"
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="overflow-x-auto h-[500px] mt-2 mb-16">
        <div
          style={{
            // border: "1px solid yellow",
            display: "flex",
            overflow: "auto",
            justifyContent: "space-between",
          }}
        >
          <div className=" h-[450px] bg-[#001147] border-2 border-[#30363d] rounded-lg mr-[10px] p-2">
            <div className="w-[300px]  h-[70px] p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 mr-2 rounded-full bg-green-600 p-2"></div>
                  <Typography variant="body1" component="p">
                    Todo
                  </Typography>
                  <div className="w-[20px] h-[20px] text-xs bg-[#30363d] font-black ml-2 max-h-[32px] items-center flex text-center rounded-full bg-green-600 justify-center p-[2px]">
                    10
                  </div>
                </div>
                <MdMoreHoriz size={30} />
              </div>
              <Typography variant="body1" component="p">
                {`This item hasn't been started`}
              </Typography>
            </div>
            <ul className="overflow-y-auto max-h-[320px]">
              <li draggable>
                <div className="w-[300px] bg-[#243260] h-[70px] mt-2 border-2 border-[#30363d] rounded-lg p-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 mr-2 rounded-full bg-green-600 p-2"></div>
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
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </ul>
            <div className="flex items-center mt-2">
              <MdOutlineAdd size={24} />
              <TextField
                size="small"
                label="Add items"
                className="text-red-800"
                sx={{color:"#ffff",backgroundColor:"#243260"}}
                type="text"
                fullWidth
                placeholder="Add items"
              />
            </div>
          </div>
{/* in progress container */}
          <div onDragOver={()=>draggingOver()}  className="h-[450px] bg-[#001147] border-2 border-[#30363d] rounded-lg mr-[10px] p-2">
            <div className="w-[300px]  h-[70px] p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 mr-2 rounded-full bg-[#9e6a03] p-2"></div>
                  <Typography variant="body1" component="p">
                    In progress
                  </Typography>
                  <div className="w-[20px] h-[20px] text-xs bg-[#30363d] font-black ml-2 max-h-[32px] items-center flex text-center rounded-full bg-green-600 justify-center p-[2px]">
                    4
                  </div>
                </div>
                <MdMoreHoriz size={30} />
              </div>
              <Typography variant="body1" component="p">
                This is actively being worked on
              </Typography>
            </div>
            <ul className="overflow-y-auto max-h-[320px]">
              <li>
                <div className="w-[300px] bg-[#243260] h-[70px] mt-2 border-2 border-[#30363d] rounded-lg p-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 mr-2 rounded-full bg-green-600 p-2"></div>
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
              <Item />
              <Item />
              <Item />
              <Item />
            </ul>
            <div className="flex items-center mt-2">
              <MdOutlineAdd size={24} />
              <TextField
                size="small"
                label="Add items"
                className="text-red-800"
                sx={{color:"#ffff",backgroundColor:"#243260"}}
                type="text"
                fullWidth
                placeholder="Add items"
              />
            </div>
          </div>

          <div className="h-[450px] bg-[#001147] border-2 border-[#30363d] rounded-lg mr-[10px] p-2">
            <div className="w-[300px]  h-[70px] p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 mr-2 rounded-full bg-[#8957e5] p-2"></div>
                  <Typography variant="body1" component="p">
                    Done
                  </Typography>
                  <div className="w-[20px] h-[20px] text-xs bg-[#30363d] font-black ml-2 max-h-[32px] items-center flex text-center rounded-full bg-green-600 justify-center p-[2px]">
                    1
                  </div>
                </div>
                <MdMoreHoriz size={30} />
              </div>
              <Typography variant="body1" component="p">
                This has been completed
              </Typography>
            </div>
            <ul className="overflow-y-auto max-h-[320px]">
              <li>
                <div className="w-[300px] bg-[#243260] h-[70px] mt-2 border-2 border-[#30363d] rounded-lg p-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 mr-2 rounded-full bg-green-600 p-2"></div>
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
              <Item />
              <Item />
            </ul>
            <div className="flex items-center mt-2">
              <MdOutlineAdd size={24} />
              <TextField
                size="small"
                label="Add items"
                className="text-red-800"
                sx={{color:"#ffff",backgroundColor:"#243260"}}
                type="text"
                fullWidth
                placeholder="Add items"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
