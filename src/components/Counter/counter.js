import { Button, Grid } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";

// { }

// export const visualCounter = (properties) => {
//   const [dayCounter, setDayCounter] = useState(
//     properties.counter.dayCounter ? properties.counter.dayCounter : 0
//   );
//   const [weekCounter, setWeekCounter] = useState("");

//   const [oneMonthCoutner, setOneMothCounter] = useState("");
//   const [twoMonthCoutner, settwoMothCounter] = useState("");

//   const [threeMonthCoutner, setThreeMothCounter] = useState("");

//   const handelDayCounter = () => {
//     setDayCounter(dayCounter + 1);
//     console.log("Handek Daz Counter:", dayCounter);
//   };

//   return (
//     <Grid>
//       <Button
//         variant="outlined"
//         onClick={() => {
//           console.log(properties);
//         }}
//       >
//         Counter
//       </Button>
//       <Button
//         variant="outlined"
//         onClick={() => {
//           properties.editCounter({ dayCounter: dayCounter });
//           console.log(properties.counter.dayCounter);
//           handelDayCounter();
//         }}
//       >
//         +1 Counter
//       </Button>
//       {/* <Grid itme>
//                 {dayCounter}

//             </Grid>

//             <Grid itme></Grid>

//             <Grid itme></Grid>

//             <Grid itme></Grid>

//             <Grid itme></Grid>
//  */}
//     </Grid>
//   );
// };

export const counterWorking = (properties) => {
  const counter = properties.globalVariables;
  const editCounter = properties.editGlobalVariables;

  const currentDate = counter.dateTime_current;
  moment.locale("de");

  if (currentDate === moment().format("LL")) {
    editCounter({ dayCounter_current: counter.dayCounter_current + 1 });
  } else {
    editCounter({
      dateTime_current: moment().format("LL"),
      dateTime_one: counter.dateTime_current,
      dateTime_tow: counter.dateTime_one,
      dayCounter_current: 1,
      dayCounter_one: counter.dayCounter_current,
      dayCounter_tow: counter.dayCounter_one,
    });
  }

  console.log("Handek Daz Counter:", counter.dateTime_current);
  console.log("Handek Daz Counter:", counter);
};


export const counter =(properties) =>{
  const task = properties.globalVariables
  const taskEditor = properties.editGlobalVariables;

  console.log(moment().format());


}