import React from "react";
import {
  AppBar,
  CircularProgress,
  Toolbar,
  withStyles,
} from "@material-ui/core";
import { PartlySunnyOutline } from "react-ionicons";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { SearchOutline } from "react-ionicons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TopbarRight, ToolbarWrapper } from "./Styled";

const WhiteTopbar = withStyles({
  root: {
    backgroundColor: "#FFFFFF",
  },
})(AppBar);

const Topbar = ({ loading, locations, handleLocationChange }) => {
  return (
    <>
      <WhiteTopbar position="fixed">
        <ToolbarWrapper>
          <Toolbar>
            <PartlySunnyOutline color={"black"} height="80px" width="80px" />
            <TopbarRight>
              <Autocomplete
                disabled={loading}
                id="auto complete"
                options={locations}
                getOptionLabel={(option) => option.postcode}
                style={{ width: 300 }}
                onChange={handleLocationChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          {loading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : (
                            <SearchOutline
                              color={"#bfbfbf"}
                              height="35px"
                              width="35px"
                            />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                )}
              />
            </TopbarRight>
          </Toolbar>
        </ToolbarWrapper>
      </WhiteTopbar>
    </>
  );
};

export default Topbar;
