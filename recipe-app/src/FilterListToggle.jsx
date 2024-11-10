import { ToggleButtonGroup } from "@mui/material";
import { ToggleButton } from "@mui/material";
import * as React from "react";

function FilterListToggle({ options, value, selectToggle }) {
  return (
    <div>
      <ToggleButtonGroup
        value={value}
        onChange={(event, newValue) => selectToggle(newValue)}
        exclusive
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          margin: "0",
        }}
      >
        {options.map((option) => (
          <ToggleButton
            key={option.id}
            value={option.value}
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.12)",
              padding: "10px 20px",
              color: "#fe5e7f",
              backgroundColor: "transparent",
              marginTop: "50px",

              "&.MuiToggleButton-root": {
                borderColor: "#fe5e7f",
              },
              "&:hover": {
                backgroundColor: "#fe5e7f",
                color: "#fff",
              },

              "&.Mui-selected": {
                backgroundColor: "#fe5e7f",
                color: "#fff",
              },

              ":first-of-type": {
                marginLeft: "300px",
                marginRight: "50px",
                borderTopLeftRadius: "50px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderBottomRightRadius: "50px",
              },
              ":last-of-type": {
                marginRight: "400px",
                borderTopLeftRadius: "50px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderBottomRightRadius: "50px",
              },

              ":nth-of-type(2)": {
                marginRight: "50px",
                borderTopLeftRadius: "50px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderBottomRightRadius: "50px",
              },

              ":nth-of-type(3)": {
                marginRight: "50px",
                borderTopLeftRadius: "50px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderBottomRightRadius: "50px",
              },

              ":nth-of-type(4)": {
                marginRight: "50px",
                borderTopLeftRadius: "50px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderBottomRightRadius: "50px",
              },
            }}
          >
            {option.value}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

export default FilterListToggle;
