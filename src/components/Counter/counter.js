import { Button, Grid } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";

// export const counterWorking = (properties) => {
//   const counter = properties.globalVariables;
//   const editCounter = properties.editGlobalVariables;

//   const currentDate = counter.dateTime_current;
//   moment.locale("de");

//   if (currentDate === moment().format("LL")) {
//     editCounter({ dayCounter_current: counter.dayCounter_current + 1 });
//   } else {
//     editCounter({
//       dateTime_current: moment().format("LL"),
//       dateTime_one: counter.dateTime_current,
//       dateTime_tow: counter.dateTime_one,
//       dayCounter_current: 1,
//       dayCounter_one: counter.dayCounter_current,
//       dayCounter_tow: counter.dayCounter_one,
//     });
//   }

//   console.log("Handek Daz Counter:", counter.dateTime_current);
//   console.log("Handek Daz Counter:", counter);
// };

// export const counter = (properties) => {
//   const task = properties.globalVariables;
//   const taskEditor = properties.editGlobalVariables;

//   console.log(moment().format());
//   console.log("Counter Priops: ", properties.expenses);
//   console.log("task current: ", properties.globalVariables.task_current);

//   properties.expenses.map((expense) => {
//     if (expense.absDatesToFinish > 0) {
//       taskEditor({
//         task_current: task.task_current + 1,
//       });
//     } else {
//       console.log("TAsk Counter");
//     }
//   });
// };

export const taskCounter = (props, varDay, varPrefDay, noteStatus) => {
  return props.filter(
    (obj) =>
      obj.absDatesToFinish < varDay &&
      obj.absDatesToFinish > varPrefDay &&
      obj.noteStatus != noteStatus
  ).length;
};

export const categorieCounter = (props) => {
  return props.filter(
    (obj)=>
    obj.categorie === props.catName
  ).length
  // console.log("Cat Props", props);
}