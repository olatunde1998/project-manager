import {
  MdFilterList,
  MdLockOutline,
  MdMoreHoriz,
  MdOutline10K,
  MdOutlineInsertChartOutlined,
} from "react-icons/md";
import View from "components/projectComponents/View";
import { Grid, TextField, Typography } from "@mui/material";
import { FilterList } from "@mui/icons-material";
import Item from "./Item";

const Filter = () => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          className="p-2 ml-2 border-[1px] border-gray-200 flex items-center"
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
          sx={{ border: "1px solid white", paddingLeft: "4px" }}
          item
          xs={12}
        >
          <div className="flex items-center">
            <MdFilterList size={24} style={{ color: "rgb(71, 110, 203)" }} />
            <div className="w-full h-full">
              <TextField
                className="w-full"
                type="text"
                placeholder="Filter by keyword or by field"
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="overflow-auto h-[500px] mt-4 mb-16 border-2 border-red-800">
        <div
          style={{
            border: "1px solid yellow",
            display: "flex",
            overflow:"auto"
            // width: "100%",
            // height: "500px",
            // position:"relative"
          }}
        >
          <div className="max-h-[1000px] min-h-[500px]  border-4 border-purple-800 mr-[10px]">
            <div className="w-[400px]  h-[70px] border-2 border-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 mr-2 rounded-full bg-green-600 p-2"></div>
                  <Typography variant="body1" component="p">
                    Todo
                  </Typography>
                  <div className="w-[20px] h-[20px] text-xs font-black ml-2 max-h-[32px] items-center flex text-center rounded-full bg-green-600 justify-center p-[2px]">
                    10
                  </div>
                </div>
                <MdMoreHoriz size={30} />
              </div>
              <Typography variant="body1" component="p">
                {`This item hasn't been started`}
              </Typography>
            </div>
            <ul>
              <li>
                <div className="w-[400px] h-[70px] mt-2 border-2 border-blue-800">
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
              <Item/>
              <Item/>
            </ul>
          </div>

          <div className="border-2 border-purple-800 mr-[10px]">
            <div className="w-[400px] h-[70px] border-2 border-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 mr-2 rounded-full bg-green-600 p-2"></div>
                  <Typography variant="body1" component="p">
                    Todo
                  </Typography>
                  <div className="w-[20px] h-[20px] text-xs font-black ml-2 max-h-[32px] items-center flex text-center rounded-full bg-green-600 justify-center p-[2px]">
                    10
                  </div>
                </div>
                <MdMoreHoriz size={30} />
              </div>
              <Typography variant="body1" component="p">
                {`This item hasn't been started`}
              </Typography>
            </div>
          </div>
          <div className="border-2 border-purple-800 mr-[10px]">
            <div className="w-[400px] h-[70px] border-2 border-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 mr-2 rounded-full bg-green-600 p-2"></div>
                  <Typography variant="body1" component="p">
                    Todo
                  </Typography>
                  <div className="w-[20px] h-[20px] text-xs font-black ml-2 max-h-[32px] items-center flex text-center rounded-full bg-green-600 justify-center p-[2px]">
                    10
                  </div>
                </div>
                <MdMoreHoriz size={30} />
              </div>
              <Typography variant="body1" component="p">
                {`This item hasn't been started`}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
