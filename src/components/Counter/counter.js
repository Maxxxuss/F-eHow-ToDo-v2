import { Button, Grid } from "@mui/material";
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

export const counter = (properties) => {
  const [dayCounter, setDayCounter] = useState(
    properties.counter.dayCounter ? properties.counter.dayCounter : 0
  );


  var schritt;
for (schritt = 0; schritt === 1; schritt++) {
  properties.editCounter({ dayCounter: dayCounter });

  setDayCounter(dayCounter + 1);

  console.log("Handek Daz Counter:", dayCounter)


  
}}

