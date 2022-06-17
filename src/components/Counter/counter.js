import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

// { }

export const Counter = (properties) => {
  const [dayCounter, setDayCounter] = useState("");
  const [weekCounter, setWeekCounter] = useState("");

  const [oneMonthCoutner, setOneMothCounter] = useState("");
  const [twoMonthCoutner, settwoMothCounter] = useState("");

  const [threeMonthCoutner, setThreeMothCounter] = useState("");

  return (
    <Grid>
      <Button
        variant="outlined"
        onClick={() => {
     
         console.log(properties);
        }}
      >
        Counter
      </Button>
      {/* <Grid itme>
                {dayCounter}


            </Grid>

            <Grid itme></Grid>

            <Grid itme></Grid>

            <Grid itme></Grid>

            <Grid itme></Grid>
 */}
    </Grid>
  );
};
