import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomizedInputBase({ width }) {
  return (
      <Paper component="form" className={`p-.5 border rounded-full flex items-center w-${width}`}>
          <IconButton type="button" className="p-3" aria-label="search">
              <SearchIcon />
          </IconButton>
          <InputBase className="ml-2 flex-1" placeholder="Search" />
      </Paper>
  );
}
