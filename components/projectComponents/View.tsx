import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { FaAngleDown, FaBorderAll, FaBorderNone, FaColumns } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { Grid, Input } from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      sx={{
        // marginTop:"24px",
        marginLeft: "50px",
        padding: "0px",
        maxWidth: "320px",
        maxHeight: "410px",
      }}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle>Layout</DialogTitle>
      <Grid sx={{alignItems:"center"}} container spacing={2}>
        <Grid sx={{marginLeft:"10px",marginRight:"5px"}} item xs={3}>
          {/* <FaBorderNone size={80} /> */}
          <FaColumns size={40} />
        </Grid>
        <Grid item xs={3}>
          <MdOutlineInsertChartOutlined size={50} />
        </Grid>
        <Grid sx={{marginLeft:"10px"}}  item xs={3}>
          <FaBorderAll size={40} />
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default function View() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className="">
      <div
        style={{ width:"20px" }}
        // variant="outlined"
        onClick={handleClickOpen}
      >
        <FaAngleDown />
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
