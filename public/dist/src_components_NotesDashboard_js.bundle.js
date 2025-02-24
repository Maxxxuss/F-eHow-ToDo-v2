"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_components_NotesDashboard_js"],{

/***/ "./src/actions/activeNote.js":
/*!***********************************!*\
  !*** ./src/actions/activeNote.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addActiveNote: () => (/* binding */ addActiveNote),
/* harmony export */   changeStatus: () => (/* binding */ changeStatus),
/* harmony export */   editActiveNote: () => (/* binding */ editActiveNote),
/* harmony export */   editActiveNoteBuzword: () => (/* binding */ editActiveNoteBuzword),
/* harmony export */   removeActiveNote: () => (/* binding */ removeActiveNote)
/* harmony export */ });


// ADD_ACTIVE_NOTE
const addActiveNote = function () {
  let {
    id,
    description,
    relevance,
    important,
    noteDecscription,
    datesToFinish,
    calenderFocused,
    categorie,
    noteUpdateDate,
    noteStatus,
    nextStep,
    riskAuswirkung,
    riskWahrscheinlichkeit,
    infoNote,
    journalNote,
    snooze,
    onHold,
    effort,
    linkTitel,
    linkURL,
    buzwords
    // docCounter
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: "ADD_ACTIVE_NOTE",
    activeNote: {
      id,
      description,
      relevance,
      important,
      noteDecscription,
      datesToFinish,
      calenderFocused,
      relevance,
      categorie,
      noteUpdateDate,
      noteStatus,
      nextStep,
      riskAuswirkung,
      riskWahrscheinlichkeit,
      infoNote,
      journalNote,
      snooze,
      onHold,
      effort,
      linkTitel,
      linkURL,
      buzwords
      // docCounter
    }
  };
};
const removeActiveNote = () => ({
  type: "REMOVE_ACTIVE_NOTE",
  activeNote: ""
});
const editActiveNote = updates => ({
  type: "EDIT_ACTIVE_NOTE",
  updates
});
const changeStatus = (id, updates) => ({
  type: "CHANGE_STATUS",
  id,
  updates
});
const editActiveNoteBuzword = (id, updates) => ({
  type: "EDIT_ACtiVENOTE_BUZWORD",
  id,
  updates
});

/***/ }),

/***/ "./src/actions/buzwords.js":
/*!*********************************!*\
  !*** ./src/actions/buzwords.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBuzword: () => (/* binding */ addBuzword),
/* harmony export */   editBuzword: () => (/* binding */ editBuzword)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


// ADD BUZWORD

const addBuzword = function () {
  let {
    titel
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: "ADD_BUZWORD",
    buzword: {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      titel
    }
  };
};
const editBuzword = (id, updates) => ({
  type: "EDIT_BUZWORD",
  id,
  updates
});

/***/ }),

/***/ "./src/actions/categorie.js":
/*!**********************************!*\
  !*** ./src/actions/categorie.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editCategorie: () => (/* binding */ editCategorie),
/* harmony export */   removeCategorie: () => (/* binding */ removeCategorie),
/* harmony export */   setCategorie: () => (/* binding */ setCategorie)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

const setCategorie = function () {
  let {
    catName,
    details,
    catID,
    m1,
    m2,
    m3,
    m4,
    aktStand,
    nextSteps,
    challenges,
    journal,
    sorting,
    //historyCategorie
    m1_1,
    m2_1,
    m3_1,
    m4_1,
    m1_2,
    m2_2,
    m3_2,
    m4_2
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: "SET_CATEGORIE",
    categorie: {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      catName,
      details,
      catID,
      m1,
      m2,
      m3,
      m4,
      aktStand,
      nextSteps,
      challenges,
      journal,
      sorting,
      //historyCategorie
      m1_1,
      m2_1,
      m3_1,
      m4_1,
      m1_2,
      m2_2,
      m3_2,
      m4_2
    }
  };
};
const editCategorie = (id, updates) => ({
  type: "EDIT_CATEGORIE",
  id,
  updates
});
const removeCategorie = function () {
  let {
    id
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return dispatch => {
    dispatch({
      type: "REMOVE_CATEGORIE",
      id
    });
  };
};

/***/ }),

/***/ "./src/actions/globalVariables.js":
/*!****************************************!*\
  !*** ./src/actions/globalVariables.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addGlobalVariables: () => (/* binding */ addGlobalVariables),
/* harmony export */   editGlobalCounterVariables: () => (/* binding */ editGlobalCounterVariables),
/* harmony export */   editGlobalVariables: () => (/* binding */ editGlobalVariables)
/* harmony export */ });


// ADD_GLOBALVARIABLES
const addGlobalVariables = function () {
  let {} = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: "ADD_GLOBALVARIABLES",
    globalVariables: {
      autoSave,
      onOffSwitch
      // activeCategorie
      // dayCounter_current,
      // dayCounter_one,
      // dayCounter_tow,
      //  weekCounter,
      // oneMonthCoutner,
      // twoMonthCoutner,
      // threeMonthCoutner,
      // dateTime_current,
      // dateTime_one,
      // dateTime_tow,
      // task_current, 
      // task_tomorrow,
      // task_afert_Tomorrow
    }
  };
};

// REMOVE_GLOBALVARIABLES
// export const removeGlobalVariables = ({ id } = {}) => ({
//   type: "REMOVE_GLOBALVARIABLES",
//   id,
// });
// export const removeGlobalVariables = ({ id } = {}) => {
//   return (dispatch) => {
//     dispatch(({
//       type: 'REMOVE_GLOBALVARIABLES',
//       id

//     }));
//   }
// }

// EDIT_GLOBALVARIABLES
const editGlobalVariables = updates => ({
  type: "EDIT_GLOBALVARIABLES",
  updates
});

// EDIT_CounterVariables
const editGlobalCounterVariables = updates => ({
  type: "EDIT_GLOBALCOUNTERVARIABLES",
  updates
});

// export const changeStatus = (id, updates) => ({
//   type: "CHANGE_STATUS",
//   id,
//   updates,
// });

/***/ }),

/***/ "./src/actions/notes.js":
/*!******************************!*\
  !*** ./src/actions/notes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addExpense: () => (/* binding */ addExpense),
/* harmony export */   addExpenseURL: () => (/* binding */ addExpenseURL),
/* harmony export */   addNoteStory: () => (/* binding */ addNoteStory),
/* harmony export */   editExpense: () => (/* binding */ editExpense),
/* harmony export */   editExpenseBuzword: () => (/* binding */ editExpenseBuzword),
/* harmony export */   removeExpense: () => (/* binding */ removeExpense)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

const addExpense = function () {
  let {
    description,
    relevance,
    important,
    noteDecscription,
    datesToFinish,
    calenderFocused,
    categorie,
    noteUpdateDate,
    noteStatus,
    nextStep,
    riskAuswirkung,
    riskWahrscheinlichkeit,
    infoNote,
    journalNote,
    snooze,
    onHold,
    effort,
    linkTitel,
    linkURL,
    task_current,
    task_tomorrow,
    task_afert_Tomorrow
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      description,
      relevance,
      important,
      noteDecscription,
      datesToFinish,
      calenderFocused,
      relevance,
      categorie,
      noteUpdateDate,
      noteStatus,
      nextStep,
      riskAuswirkung,
      riskWahrscheinlichkeit,
      infoNote,
      journalNote,
      snooze,
      onHold,
      effort,
      linkTitel,
      linkURL,
      task_current,
      task_tomorrow,
      task_afert_Tomorrow
    }
  };
};
const removeExpense = function () {
  let {
    id
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
const addNoteStory = (noteId, updates) => ({
  type: "ADD_NOTE_STORY",
  noteId,
  updates
});
const editExpenseBuzword = (id, updates) => ({
  type: "EDIT_EXPENSE_BUZWORD",
  id,
  updates
});
const addExpenseURL = (id, updates) => ({
  type: "ADD_ACtiVENOTE_URL",
  // urlID:uuidv4(),
  id,
  updates
});

/***/ }),

/***/ "./src/components/AddDeleteProject.js":
/*!********************************************!*\
  !*** ./src/components/AddDeleteProject.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddDeleteProject)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/AddCircleOutline */ "./node_modules/@mui/icons-material/AddCircleOutline.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogActions/DialogActions.js");



function AddDeleteProject(props) {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [categorieName, setCategorieName] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
  const [categorieID, setCategorieID] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
  const handelCategorieChange = event => {
    setCategorieName(event.target.value);
  };
  const handelIDChange = event => {
    setCategorieID(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const addCategorie = () => {
    props.setCategorie({
      catName: categorieName,
      catID: categorieID,
      sorting: 1 + Math.max.apply(Math, props.categories.map(categorie => categorie.sorting))
    }), handleClose();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: handleClickOpen,
    color: "primary",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fontSize: "large"
    })
  }, "Add Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: open,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Start New Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    htmlFor: "demo-dialog-native"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChange: handelIDChange,
    label: "Project ID"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    htmlFor: "demo-dialog-native"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChange: handelCategorieChange,
    label: "Project TItle"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: addCategorie,
    color: "primary",
    variant: "contained"
  }, "Add Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"))));
}

/***/ }),

/***/ "./src/components/Button/AddNote.js":
/*!******************************************!*\
  !*** ./src/components/Button/AddNote.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handelRemoveNote: () => (/* binding */ handelRemoveNote),
/* harmony export */   handelTakeChanges: () => (/* binding */ handelTakeChanges)
/* harmony export */ });
/* harmony import */ var _inputs_autoSave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inputs/autoSave */ "./src/components/inputs/autoSave.js");


// export function handelAddNote(props, updates) {
//   props.addExpense(updates);
//   autoSaveFunc(props);
// }

function handelTakeChanges(props, updates) {
  props.editExpense(updates.id, updates);
  (0,_inputs_autoSave__WEBPACK_IMPORTED_MODULE_0__.autoSaveFunc)(props);
}
function handelRemoveNote(props, updates) {
  props.removeExpense({
    id: updates.id
  });
  (0,_inputs_autoSave__WEBPACK_IMPORTED_MODULE_0__.autoSaveFunc)(props);
}

/***/ }),

/***/ "./src/components/Buzwords/buzwords.js":
/*!*********************************************!*\
  !*** ./src/components/Buzwords/buzwords.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BuzwordTags)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Autocomplete */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_icons_material_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/CheckBoxOutlineBlank */ "./node_modules/@mui/icons-material/CheckBoxOutlineBlank.js");
/* harmony import */ var _mui_icons_material_CheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/CheckBox */ "./node_modules/@mui/icons-material/CheckBox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }








const icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_1__["default"], {
  fontSize: "small"
});
const checkedIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
  fontSize: "small"
});
function BuzwordTags(props) {
  const tNdsProps = props.titelNdsProps.NotesDashboradProps;
  const buzOptions = tNdsProps.buzwords;
  const [indexOptions, setIndexOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const defaultOptions = tNdsProps.activeNote.buzwords ? tNdsProps.activeNote.buzwords : buzOptions[0];
  const updates = {
    buzwords: indexOptions
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: true,
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    multiple: true,
    onChange: (event, value) => {
      setIndexOptions(value);
    },
    id: "checkboxes-tags-demo",
    options: buzOptions,
    disableCloseOnSelect: true,
    getOptionLabel: option => option.titel,
    defaultValue: defaultOptions,
    renderOption: (props, option, _ref) => {
      let {
        selected
      } = _ref;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: icon,
        checkedIcon: checkedIcon,
        style: {
          marginRight: 8
        },
        checked: selected
      }), option.titel);
    },
    style: {
      width: 500
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, params, {
      label: "Checkboxes",
      placeholder: "Favorites"
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: true,
    ml: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    onClick: () => {
      tNdsProps.editExpenseBuzword(tNdsProps.activeNote.id, updates), tNdsProps.editActiveNote(updates);
    }
  }, "Add to Note")));
}

/***/ }),

/***/ "./src/components/Counter/counter.js":
/*!*******************************************!*\
  !*** ./src/components/Counter/counter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categorieCounter: () => (/* binding */ categorieCounter),
/* harmony export */   taskCounter: () => (/* binding */ taskCounter)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




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

const taskCounter = (props, varDay, varPrefDay, noteStatus) => {
  return props.filter(obj => obj.absDatesToFinish < varDay && obj.absDatesToFinish > varPrefDay && obj.noteStatus != noteStatus).length;
};
const categorieCounter = props => {
  return props.filter(obj => obj.categorie === props.catName).length;
  // console.log("Cat Props", props);
};

/***/ }),

/***/ "./src/components/ImpExpData.js":
/*!**************************************!*\
  !*** ./src/components/ImpExpData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImpExpData: () => (/* binding */ ImpExpData),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _actions_globalVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/globalVariables */ "./src/actions/globalVariables.js");
/* harmony import */ var _selectors_autoSave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors/autoSave */ "./src/selectors/autoSave.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./src/store/configureStore.js");
/* harmony import */ var _inputs_autoSave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputs/autoSave */ "./src/components/inputs/autoSave.js");







function ImpExpData(props) {
  var _this = this;
  const expLocalStorage = function (filename) {
    let text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,_store_configureStore__WEBPACK_IMPORTED_MODULE_3__.locCache)();
    var blob = new Blob([text], {
      type: "text/plain"
    });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    _this.props.editGlobalVariables({
      autoSave: 0
    });
  };
  const impLocStora = event => {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      (0,_store_configureStore__WEBPACK_IMPORTED_MODULE_3__.setLocalStorageState)(JSON.stringify(JSON.parse(reader.result)));
    };
    reader.readAsText(file);
    window.location.reload();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 10,
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inputs_autoSave__WEBPACK_IMPORTED_MODULE_4__.AutoSave, {
    props: props
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "secondary",
    variant: "contained",
    className: "expButton",
    onClick: () => expLocalStorage()
  }, "Export Local Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    id: "file",
    name: "file",
    onChange: e => impLocStora(e)
  }))));
}
const mapStateToProps = state => {
  return {
    globalVariables: (0,_selectors_autoSave__WEBPACK_IMPORTED_MODULE_2__.getGlobalVariables)(state)
  };
};
const mapDispatchToProps = dispatch => ({
  editGlobalVariables: autoSave => dispatch((0,_actions_globalVariables__WEBPACK_IMPORTED_MODULE_1__.editGlobalVariables)(autoSave))
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(mapStateToProps, mapDispatchToProps)(ImpExpData));

/***/ }),

/***/ "./src/components/NotesDashboard.js":
/*!******************************************!*\
  !*** ./src/components/NotesDashboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotesDashboardPage: () => (/* binding */ NotesDashboardPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setActiveNote: () => (/* binding */ setActiveNote)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/configureStore */ "./src/store/configureStore.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _ImpExpData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImpExpData */ "./src/components/ImpExpData.js");
/* harmony import */ var _selectors_notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectors/notes */ "./src/selectors/notes.js");
/* harmony import */ var _inputs_titel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputs/titel */ "./src/components/inputs/titel.js");
/* harmony import */ var _actions_activeNote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/activeNote */ "./src/actions/activeNote.js");
/* harmony import */ var _selectors_activeNote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selectors/activeNote */ "./src/selectors/activeNote.js");
/* harmony import */ var _actions_notes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/notes */ "./src/actions/notes.js");
/* harmony import */ var _actions_categorie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/categorie */ "./src/actions/categorie.js");
/* harmony import */ var _actions_buzwords__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/buzwords */ "./src/actions/buzwords.js");
/* harmony import */ var _actions_noteDoc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/noteDoc */ "./src/actions/noteDoc.js");
/* harmony import */ var _inputs_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inputs/search */ "./src/components/inputs/search.js");
/* harmony import */ var _selectors_categories__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../selectors/categories */ "./src/selectors/categories.js");
/* harmony import */ var _AddDeleteProject__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AddDeleteProject */ "./src/components/AddDeleteProject.js");
/* harmony import */ var _selectors_autoSave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../selectors/autoSave */ "./src/selectors/autoSave.js");
/* harmony import */ var _actions_globalVariables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/globalVariables */ "./src/actions/globalVariables.js");
/* harmony import */ var _selectors_buzwords__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../selectors/buzwords */ "./src/selectors/buzwords.js");
/* harmony import */ var _selectors_noteDoc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../selectors/noteDoc */ "./src/selectors/noteDoc.js");




















// import { TabCategorie } from "./Categorie";

function setActiveNote(expense, props) {
  //ALS PROPS MÜSSEN ÜBERGEBEN WERDEN (1) Add ActiveNote und RemoveActiveNote

  if (expense != "" && expense != null && expense != undefined) {
    const updates = {
      id: expense.id,
      description: expense.description,
      relevance: expense.relevance,
      important: expense.important,
      noteDecscription: expense.noteDecscription,
      datesToFinish: expense.datesToFinish,
      categorie: expense.categorie,
      nextStep: expense.nextStep,
      infoNote: expense.infoNote,
      effort: expense.effort,
      noteStatus: expense.noteStatus,
      buzwords: expense.buzwords,
      bTitel: expense.bTitel
      // docCounter: expense.docCounter
    };
    props.addActiveNote(updates);
    console.log("Active Notee: ", expense);
  }
}
function NotesDashboardPage(props) {
  // const [tabCategorie, setTabCategorie] = useState(0);
  // const [activeCategorie, setActiveCategorie] = useState({ catName: "ALL" });
  const [activeCategorie, setActiveCategorie] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    catName: "ALL"
  });
  const [tabCategorie, setTabCategorie] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  if (props.categories.length < 1) {
    props.setCategorie({
      catName: "ALL",
      sorting: 1
    });
  }
  const ProjectTab = categories => categories.map((categorie, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    key: categorie.sorting ? categorie.sorting : index,
    label: categorie.catName,
    onClick: () => {
      setActiveCategorie(categorie);
      // console.log("categorie Change: ", categorie)
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    sx: {
      backgroundColor: "background.default",
      minHeight: "100%"
      // py: 2,
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    mt: 2,
    mb: 2,
    mr: 2,
    ml: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    container: true,
    alignItems: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    href: "/proDash",
    style: {
      // backgroundColor: "yellow",
      padding: "20"
    }
  }, "Project Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    href: "/documentDash",
    style: {
      // backgroundColor: "yellow",
      padding: "20"
    }
  }, "Document Dashboard")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    mt: 2,
    mb: 2,
    mr: 2,
    ml: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    position: "static",
    color: "default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    container: true,
    alignItems: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    value: tabCategorie,
    onChange: (e, newValue) => setTabCategorie(newValue),
    variant: "scrollable",
    scrollButtons: "auto",
    "aria-label": "scrollable auto tabs example"
  }, ProjectTab(props.categories))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddDeleteProject__WEBPACK_IMPORTED_MODULE_13__["default"], {
    setCategorie: props.setCategorie,
    categories: props.categories
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    mt: 2,
    mb: 2,
    mr: 2,
    ml: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    container: true,
    spacing: 2,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inputs_search__WEBPACK_IMPORTED_MODULE_11__.SearchForNotes, {
    props: props,
    activeCategorie: activeCategorie
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inputs_titel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    NotesDashboradProps: props,
    activeCategorie: activeCategorie
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    mt: 2,
    mb: 2,
    mr: 2,
    ml: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    container: true,
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ImpExpData__WEBPACK_IMPORTED_MODULE_2__["default"], {
    props: props
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    variant: "overline"
  }, "Ideas or Support: ehow.todo.mn@gmail.com - v1.0.0")))));
}
const mapStateToProps = state => {
  return {
    activeNote: (0,_selectors_activeNote__WEBPACK_IMPORTED_MODULE_6__.getAllActiveNotes)(state),
    expenses: (0,_selectors_notes__WEBPACK_IMPORTED_MODULE_3__.getAllExpenses)(state).sort((a, b) => a.prio > b.prio ? -1 : 1),
    openExpenses: (0,_selectors_notes__WEBPACK_IMPORTED_MODULE_3__.getAllExpenses)(state).sort((a, b) => a.prio > b.prio ? -1 : 1).filter(expense => expense.noteStatus === "open"),
    categories: (0,_selectors_categories__WEBPACK_IMPORTED_MODULE_12__.getAllCategories)(state).sort((a, b) => a.sorting > b.sorting ? 1 : -1),
    globalVariables: (0,_selectors_autoSave__WEBPACK_IMPORTED_MODULE_14__.getGlobalVariables)(state),
    buzwords: (0,_selectors_buzwords__WEBPACK_IMPORTED_MODULE_16__.getAllBuzwords)(state),
    noteDocs: (0,_selectors_noteDoc__WEBPACK_IMPORTED_MODULE_17__.getAllNoteDocs)(state)
  };
};
const mapDispatchToProps = dispatch => ({
  setCategorie: categorie => dispatch((0,_actions_categorie__WEBPACK_IMPORTED_MODULE_8__.setCategorie)(categorie)),
  removeCategorie: id => dispatch((0,_actions_categorie__WEBPACK_IMPORTED_MODULE_8__.removeCategorie)(id)),
  addActiveNote: activeNote => dispatch((0,_actions_activeNote__WEBPACK_IMPORTED_MODULE_5__.addActiveNote)(activeNote)),
  editActiveNote: updates => dispatch((0,_actions_activeNote__WEBPACK_IMPORTED_MODULE_5__.editActiveNote)(updates)),
  removeActiveNote: () => dispatch((0,_actions_activeNote__WEBPACK_IMPORTED_MODULE_5__.removeActiveNote)()),
  removeExpense: id => dispatch((0,_actions_notes__WEBPACK_IMPORTED_MODULE_7__.removeExpense)(id)),
  addExpense: expense => dispatch((0,_actions_notes__WEBPACK_IMPORTED_MODULE_7__.addExpense)(expense)),
  editExpense: (id, updates) => dispatch((0,_actions_notes__WEBPACK_IMPORTED_MODULE_7__.editExpense)(id, updates)),
  editExpenseBuzword: (id, updates) => dispatch((0,_actions_notes__WEBPACK_IMPORTED_MODULE_7__.editExpenseBuzword)(id, updates)),
  editGlobalVariables: autoSave => dispatch((0,_actions_globalVariables__WEBPACK_IMPORTED_MODULE_15__.editGlobalVariables)(autoSave)),
  // DEL
  startStory: id => dispatch(startStory(id)),
  // BuzWords
  addBuzword: buzword => dispatch((0,_actions_buzwords__WEBPACK_IMPORTED_MODULE_9__.addBuzword)(buzword)),
  editBuzword: (id, updates) => dispatch((0,_actions_buzwords__WEBPACK_IMPORTED_MODULE_9__.editBuzword)(id, updates)),
  addNoteDoc: (id, updates) => dispatch((0,_actions_noteDoc__WEBPACK_IMPORTED_MODULE_10__.addNoteDoc)(id, updates)),
  //NoteDoc
  editNoteDoc: (id, updates) => dispatch((0,_actions_noteDoc__WEBPACK_IMPORTED_MODULE_10__.editNoteDoc)(id, updates))
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_25__.connect)(mapStateToProps, mapDispatchToProps)(NotesDashboardPage));

/***/ }),

/***/ "./src/components/inputs/autoSave.js":
/*!*******************************************!*\
  !*** ./src/components/inputs/autoSave.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoSave: () => (/* binding */ AutoSave),
/* harmony export */   autoSaveFunc: () => (/* binding */ autoSaveFunc)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/configureStore */ "./src/store/configureStore.js");



function autoSaveFunc(props) {
  const text = (0,_store_configureStore__WEBPACK_IMPORTED_MODULE_1__.locCache)();
  const autoSave = props.globalVariables.autoSave;
  const onOffSwitch = props.globalVariables.onOffSwitch;
  if (onOffSwitch === true) {
    if (autoSave === 10) {
      var blob = new Blob([text], {
        type: "text/plain"
      });
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "eHowAutoSave";
      a.click();
      props.editGlobalVariables({
        autoSave: 0
      });
    } else {
      props.editGlobalVariables({
        autoSave: autoSave + 1
      });
    }
  }
}
function AutoSave(properties) {
  const props = properties.props;
  const onOffSwitch = props.globalVariables.onOffSwitch;
  const autoSave = props.globalVariables.autoSave;
  const autoSaveSwitch = () => {
    const onOffSwitch = props.globalVariables.onOffSwitch;
    if (onOffSwitch != true) {
      props.editGlobalVariables({
        onOffSwitch: true
      });
    } else {
      props.editGlobalVariables({
        onOffSwitch: false
      });
    }
  };
  const autoSaveLabel = () => {
    const onOffSwitch = props.globalVariables.onOffSwitch;
    const autoSave = 11 - props.globalVariables.autoSave;
    if (onOffSwitch != true) {
      return "Auto Save OFF";
    } else {
      return "Auto Save in " + autoSave + " Actions";
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      checked: props.globalVariables.onOffSwitch != false ? false : true,
      onChange: () => autoSaveSwitch(),
      color: "error"
    }),
    label: autoSaveLabel()
  });
}

/***/ }),

/***/ "./src/components/inputs/search.js":
/*!*****************************************!*\
  !*** ./src/components/inputs/search.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchForNotes: () => (/* binding */ SearchForNotes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _NotesDashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NotesDashboard */ "./src/components/NotesDashboard.js");
/* harmony import */ var _showNoteList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showNoteList */ "./src/components/showNoteList.js");
/* harmony import */ var _mui_icons_material_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/CheckBoxOutlineBlank */ "./node_modules/@mui/icons-material/CheckBoxOutlineBlank.js");
/* harmony import */ var _mui_icons_material_CheckBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/CheckBox */ "./node_modules/@mui/icons-material/CheckBox.js");
/* harmony import */ var _Counter_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Counter/counter */ "./src/components/Counter/counter.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }







function SearchForNotes(properties) {
  const {
    props,
    activeCategorie
  } = properties;
  const [filteredNotes, setFilteredNotes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // Use null for initial state
  const [noteListStatus, setNoteListStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("open");
  const [filteredNotesOnBuz, setFilteredNotesOnBuz] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.expenses);
  const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fontSize: "small"
  });
  const checkedIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontSize: "small"
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => (0,_NotesDashboard__WEBPACK_IMPORTED_MODULE_1__.setActiveNote)(filteredNotes, props), [filteredNotes]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFilteredNotesOnBuz(props.expenses);
  }, [props.expenses]);
  const searchBuzSetting = value => {
    const latestValue = value[value.length - 1];
    const newFilteredNotes = props.expenses.filter(note => note.bTitel.includes(latestValue) || note.description.includes(latestValue) || note.noteDecscription.includes(latestValue));
    setFilteredNotesOnBuz(newFilteredNotes);
  };
  const handleMultiRemoveNote = () => {
    const delNotes = props.expenses.filter(note => note.absDatesToFinish < -45 && note.noteStatus === "closed");
    delNotes.forEach(note => {
      props.removeExpense({
        id: note.id
      });
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (filteredNotesOnBuz.length === 0 && props.expenses.length > 0) {
      setFilteredNotesOnBuz(props.expenses);
    }
  }, [filteredNotesOnBuz.length, props.expenses]);
  const handleFilterChange = () => {
    setChecked(prev => !prev);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mr: 2,
    ml: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      checked: checked,
      onChange: handleFilterChange
    }),
    label: "Filter"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      bgcolor: "background.paper",
      color: 'text.secondary',
      boxShadow: 1,
      p: 2,
      maxWidth: 140
    }
  }, (0,_Counter_counter__WEBPACK_IMPORTED_MODULE_3__.taskCounter)(props.expenses, 0.6, -100.4, "closed"), "/", (0,_Counter_counter__WEBPACK_IMPORTED_MODULE_3__.taskCounter)(props.expenses, 1.4, 0.6, "closed"), "/", (0,_Counter_counter__WEBPACK_IMPORTED_MODULE_3__.taskCounter)(props.expenses, 2.2, 1.4, "closed"), "/", (0,_Counter_counter__WEBPACK_IMPORTED_MODULE_3__.taskCounter)(props.expenses, 3, 2, 2, "closed"), "/", (0,_Counter_counter__WEBPACK_IMPORTED_MODULE_3__.taskCounter)(props.expenses, 3.8, 3, "closed"), "(", (0,_Counter_counter__WEBPACK_IMPORTED_MODULE_3__.taskCounter)(props.expenses, 100, -100, "closed"), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    in: checked
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    options: props.expenses,
    value: filteredNotes,
    onChange: (event, expense) => setFilteredNotes(expense),
    getOptionLabel: note => note.description ? "".concat(note.description, " - ").concat(note.noteDecscription.replace(/<[^>]+>/g, "")) : "No Description" // Display a default message for empty descriptions
    ,
    style: {
      marginBottom: "10px",
      background: "rgba(238, 238, 238, 0.405)"
    },
    fullWidth: true,
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, params, {
      label: "Search Note",
      variant: "outlined"
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "status-select-label"
  }, "Filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelId: "status-select-label",
    value: noteListStatus,
    label: "Status",
    onChange: e => setNoteListStatus(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: "open"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: "allOpen"
  }, "Just Do\xB4s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: "openTomorrow"
  }, "Do\xB4s +1 Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: "openAfterTomorrow"
  }, "Do\xB4s +2 Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: "closed"
  }, "Closed")))), noteListStatus === "closed" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClick: handleMultiRemoveNote,
    variant: "contained",
    color: "error"
  }, "Del Closed +45 D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    multiple: true,
    onChange: (event, value) => {
      searchBuzSetting(value.map(buz => buz.titel));
    },
    id: "tags-filter-Buz",
    options: props.buzwords,
    getOptionLabel: option => option.titel,
    renderOption: (props, option, _ref) => {
      let {
        selected
      } = _ref;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
        icon: icon,
        checkedIcon: checkedIcon,
        style: {
          marginRight: 8
        },
        checked: selected
      }), option.titel);
    },
    style: {
      width: 500
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, params, {
      label: "Search Buzwords",
      placeholder: "Favorites"
    }))
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    mr: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_showNoteList__WEBPACK_IMPORTED_MODULE_2__.ShowNotes, {
    props: props,
    expenses: filteredNotesOnBuz,
    activeCategorie: activeCategorie,
    noteListStatus: noteListStatus
  }))));
}

/***/ }),

/***/ "./src/components/inputs/titel.js":
/*!****************************************!*\
  !*** ./src/components/inputs/titel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonSwitch: () => (/* binding */ ButtonSwitch),
/* harmony export */   ShortDescription: () => (/* binding */ ShortDescription),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ButtonGroup/ButtonGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Clear */ "./node_modules/@mui/icons-material/Clear.js");
/* harmony import */ var _Button_DoubleCheckRemoveButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/DoubleCheckRemoveButton */ "./src/components/Button/DoubleCheckRemoveButton.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _autoSave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autoSave */ "./src/components/inputs/autoSave.js");
/* harmony import */ var _selectors_activeNote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selectors/activeNote */ "./src/selectors/activeNote.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _mui_icons_material_PublishedWithChangesOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/PublishedWithChangesOutlined */ "./node_modules/@mui/icons-material/PublishedWithChangesOutlined.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/configureStore */ "./src/store/configureStore.js");
/* harmony import */ var _Buzwords_buzwords__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Buzwords/buzwords */ "./src/components/Buzwords/buzwords.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Box/Box.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _noteDocs_NoteDocInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../noteDocs/NoteDocInput */ "./src/components/noteDocs/NoteDocInput.js");
/* harmony import */ var _noteDocs_NoteDocView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../noteDocs/NoteDocView */ "./src/components/noteDocs/NoteDocView.js");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

















const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};
const ShortDescription = properties => {
  const props = properties;
  const ndsProps = properties.NotesDashboradProps;
  const [activeNoteID, setActiveNoteID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [relevance, setrelevance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [important, setimportant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [noteDecscription, setnoteDecscription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [datesToFinish, setdatesToFinish] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [nextStep, setnextStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [infoNote, setinfoNote] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [effort, seteffort] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [noteStatus, setnoteStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [activeCategorie, setActiveCategorie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [inputCategorie, setInputCategorie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [aNoteId, setaNoteId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [noteId, setNoteId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [buttonHandler, setButtonHandler] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("AddNote");
  const space = "<p><br></p> ";
  const timeStamp = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("ddd - DD.MM.YY");
  const clearInputValues = ndsProps => {
    ndsProps.removeActiveNote();
    setActiveNoteID("");
    setDescription("");
    setrelevance("");
    setimportant("");
    setnoteDecscription("");
    setdatesToFinish("");
    setnextStep("");
    setinfoNote("");
    seteffort("");
    setInputCategorie("");
    setActiveCategorie("");
    setButtonHandler("AddNote");
  };
  const ListItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__["default"])("li")(_ref => {
    let {
      theme
    } = _ref;
    return {
      margin: theme.spacing(0.5)
    };
  });
  if (activeNoteID != ndsProps.activeNote.id) {
    setActiveNoteID(ndsProps.activeNote.id);
    setDescription(ndsProps.activeNote.description);
    setrelevance(ndsProps.activeNote.relevance);
    setimportant(ndsProps.activeNote.important);
    setnoteDecscription(ndsProps.activeNote.noteDecscription.replaceAll("</p><p><br></p><p><br></p>", ""));
    setInputCategorie(ndsProps.activeNote.categorie);
    setdatesToFinish(ndsProps.activeNote.datesToFinish);
    setnextStep(ndsProps.activeNote.nextStep);
    setinfoNote(ndsProps.activeNote.infoNote);
    seteffort(ndsProps.activeNote.effort);
    setnoteStatus(ndsProps.activeNote.noteStatus);
    setButtonHandler("EditNote");
  }
  const startNewNote = {
    id: activeNoteID,
    description: description,
    relevance: relevance ? relevance : 1,
    important: important ? important : 1,
    noteDecscription: space + timeStamp + noteDecscription,
    datesToFinish: datesToFinish ? datesToFinish : moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, "days"),
    categorie: inputCategorie ? inputCategorie : ndsProps.activeNote.id != "" ? ndsProps.activeNote.categorie : properties.activeCategorie.catName,
    nextStep: nextStep,
    infoNote: infoNote,
    effort: effort
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };
  const updates = {
    id: activeNoteID,
    description: description,
    relevance: relevance ? relevance : 1,
    important: important ? important : 1,
    noteDecscription: space + timeStamp + noteDecscription,
    datesToFinish: datesToFinish ? datesToFinish : moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, "days"),
    categorie: inputCategorie ? inputCategorie : ndsProps.activeNote.id != "" ? ndsProps.activeNote.categorie : properties.activeCategorie.catName,
    nextStep: nextStep,
    infoNote: infoNote,
    effort: effort
  };
  if (ndsProps.activeNote.length > 0 && ndsProps.activeNote.id != aNoteId) {
    setaNoteId(ndsProps.activeNote.id);
    setNoteId(ndsProps.activeNote.id);
  }
  function statusChange(ndsProps, updates) {
    if (noteStatus === "open") {
      const noteStatus = {
        ...updates,
        ...{
          noteStatus: "closed"
        }
      };
      ndsProps.editExpense(ndsProps.activeNote.id, noteStatus);
      (0,_autoSave__WEBPACK_IMPORTED_MODULE_4__.autoSaveFunc)(ndsProps);
    } else {
      const noteStatus = {
        ...updates,
        ...{
          noteStatus: "open"
        }
      };
      ndsProps.editExpense(ndsProps.activeNote.id, noteStatus);
      (0,_autoSave__WEBPACK_IMPORTED_MODULE_4__.autoSaveFunc)(ndsProps);
    }
  }
  var modules = {
    toolbar: [[{
      header: 1
    }, {
      header: 2
    }], ["bold", "italic", "underline", "strike", "blockquote"], [{
      list: "ordered"
    }, {
      list: "bullet"
    }, {
      indent: "-1"
    }, {
      indent: "+1"
    }], [{
      color: "red"
    }, {
      background: []
    }], ["link", "image"], ["clean"]]
  };
  var formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "color", "background"];
  function decider(ndsProps) {
    if (buttonHandler === "EditNote") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        color: "primary",
        onClick: () => {
          ndsProps.editExpense(ndsProps.activeNote.id, updates), ndsProps.editActiveNote(updates), clearInputValues(ndsProps), (0,_autoSave__WEBPACK_IMPORTED_MODULE_4__.autoSaveFunc)(ndsProps);
        }
      }, ndsProps.activeNote.noteDecscription.replace(/<[^>]+>/g, "").length - 1 != noteDecscription.replace(/<[^>]+>/g, "").length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_icons_material_PublishedWithChangesOutlined__WEBPACK_IMPORTED_MODULE_13__["default"], {
        color: "warning",
        fontSize: "medium",
        sx: {
          mr: 2
        }
      }) : "", "Edit Note");
    } else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      variant: "contained",
      color: "primary",
      onClick: () => {
        ndsProps.addExpense(startNewNote), clearInputValues(ndsProps), (0,_autoSave__WEBPACK_IMPORTED_MODULE_4__.autoSaveFunc)(ndsProps);
      }
    }, "Add NOte");
  }
  function deciderClearInputValue(ndsProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onClick: () => clearInputValues(ndsProps),
      size: "large",
      color: "primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_15__["default"], {
      fontSize: "large"
    })));
  }
  const [openBuz, setOpenBuz] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [openDoc, setOpenDoc] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const handleOpenBuz = () => setOpenBuz(true);
  const handleCloseBuz = () => setOpenBuz(false);
  const handleOpenDoc = () => setOpenDoc(true);
  const handleCloseDoc = () => setOpenDoc(false);
  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (editorRef.current) {
      // Hier kannst du auf editorRef.current zugreifen, um das Quill-Editor-Element zu erhalten
      console.log(editorRef.current);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    mt: 1,
    mb: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    fullWidth: true
  }, decider(ndsProps), buttonHandler === "EditNote" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "outlined",
    onClick: () => statusChange(ndsProps, updates) + clearInputValues(ndsProps)
  }, "Set Status: ", noteStatus === "open" ? "close" : "open") : "", buttonHandler === "EditNote" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Button_DoubleCheckRemoveButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeNote: ndsProps.activeNote,
    handelRemoveNote: ndsProps.removeExpense
  }) : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    container: true,
    spacing: 2,
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    container: true,
    item: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 1
  }, deciderClearInputValue(ndsProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    label: "Titel",
    variant: "filled",
    value: description,
    onChange: e => setDescription(e.target.value),
    color: "secondary",
    fullWidth: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    container: true,
    spacing: 1,
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    label: "Days",
    onChange: e => setdatesToFinish(moment__WEBPACK_IMPORTED_MODULE_0___default()().add(e.target.value, "days"))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    label: "Finish Till",
    value: datesToFinish ? moment__WEBPACK_IMPORTED_MODULE_0___default()(datesToFinish).format("ddd - DD.MM.YY") : "",
    onChange: e => setdatesToFinish(moment__WEBPACK_IMPORTED_MODULE_0___default()().add(e.target.value, "days")),
    variant: "filled",
    color: "secondary",
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    label: "Dringlich",
    variant: "filled",
    value: relevance,
    onChange: e => setrelevance(e.target.value),
    color: "secondary",
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    label: "Wichtig",
    variant: "filled",
    color: "secondary",
    value: important,
    onChange: e => setimportant(e.target.value),
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    label: "Aufwand",
    variant: "filled",
    value: effort,
    onChange: e => seteffort(e.target.value),
    color: "secondary",
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: activeCategorie,
    onChange: (e, newValue) => {
      setActiveCategorie(newValue);
    },
    inputValue: inputCategorie ? inputCategorie : ndsProps.activeNote.id != "" ? ndsProps.activeNote.categorie : properties.activeCategorie.catName,
    onInputChange: (e, newInputValue) => {
      setInputCategorie(newInputValue);
    },
    options: ndsProps.categories,
    getOptionLabel: option => option.catName ? option.catName : "",
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({}, params, {
      label: "Project",
      variant: "filled",
      color: "secondary"
    }))
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      display: "flex",
      justifyContent: "row",
      flexWrap: "wrap",
      listStyle: "none",
      p: 0.2,
      m: 0,
      width: "100%"
    },
    component: "ul"
  }, ndsProps.activeNote.buzwords.map(data => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ListItem, {
      key: data.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: data.titel
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: "small",
    variant: "outlined",
    onClick: handleOpenBuz
  }, "Add Buzword"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: openBuz,
    onClose: handleCloseBuz,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_23__["default"], {
    sx: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Buzwords_buzwords__WEBPACK_IMPORTED_MODULE_7__["default"], {
    titelNdsProps: properties,
    activeNoteID: activeNoteID
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ChildModal, {
    propsBuzword: props.NotesDashboradProps.buzwords,
    addBuzword: props.NotesDashboradProps.addBuzword,
    editBuzword: props.NotesDashboradProps.editBuzword
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: "small",
    variant: "outlined",
    onClick: handleOpenDoc
  }, "Add Doccument"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: openDoc,
    onClose: handleCloseDoc,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_23__["default"], {
    sx: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_noteDocs_NoteDocInput__WEBPACK_IMPORTED_MODULE_8__.NoteDocInput, {
    activeNoteID: activeNoteID,
    addNoteDoc: ndsProps.addNoteDoc,
    categorie: updates.categorie,
    editExpense: ndsProps.editExpense,
    docCounter: ndsProps.activeNote.docCounter
    // noteDocs={ndsProps.noteDocs}

    // activeNote={ndsProps.activeNote}
    // editActiveNote={ndsProps.editActiveNote}
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_noteDocs_NoteDocView__WEBPACK_IMPORTED_MODULE_9__.NoteDocView, {
    activeNoteID: activeNoteID,
    noteDocs: ndsProps.noteDocs,
    editNoteDoc: ndsProps.editNoteDoc
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react_quill__WEBPACK_IMPORTED_MODULE_3___default()), {
    ref: editorRef,
    theme: "snow",
    value: noteDecscription,
    onChange: setnoteDecscription,
    modules: modules,
    formats: formats
  }));
};
function ButtonSwitch(add_edit, remove, updates, bTitel) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    color: "primary",
    variant: "text",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "contained",
    onClick: () => add_edit(updates)
  }, bTitel)));
}
function ChildModal(props) {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [activeBuz, setActiveBuz] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [titel, setTitel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const handleListItemClick = (buzword, props, event, index) => {
    setSelectedIndex(index);
    setActiveBuz(buzword, props.props);
    setTitel(buzword.titel);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "outlined",
    color: "success",
    onClick: handleOpen
  }, "Add & Edit Buzwords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    hideBackdrop: true,
    open: open,
    onClose: handleClose,
    "aria-labelledby": "child-modal-title",
    "aria-describedby": "child-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_23__["default"], {
    overflow: "auto",
    sx: {
      ...style,
      width: 900,
      maxHeight: 600
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, props.propsBuzword.map((buzword, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      elevation: 4
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: buzword.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
      dense: true,
      selected: selectedIndex === index,
      onClick: event => handleListItemClick(buzword, props, event, index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
      id: buzword.id,
      primary: buzword.titel.substr(0, 30)
    }))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 5,
    ml: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    label: "Titel",
    variant: "filled",
    color: "secondary",
    value: titel,
    onChange: e => setTitel(e.target.value),
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, activeBuz === "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "contained",
    color: "primary",
    onClick: () => {
      props.addBuzword({
        titel: titel
      });
      setTitel("");
    }
  }, "Add new Buz") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "outlined",
    onClick: () => {
      props.editBuzword(activeBuz.id, {
        titel: titel
      });
      setTitel("");
      setActiveBuz("");
    }
  }, "Take Change"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: () => {
      setTitel("");
      setActiveBuz("");
    }
  }, "Clear"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "secondary",
    onClick: handleClose
  }, "Close Window")))))))));
}
console.log(_store_configureStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState());
const mapStateToProps = state => {
  return {
    activeNote: (0,_selectors_activeNote__WEBPACK_IMPORTED_MODULE_5__.getAllActiveNotes)(state)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_28__.connect)(mapStateToProps, null)(ShortDescription));

/***/ }),

/***/ "./src/components/noteDocs/NoteDocInput.js":
/*!*************************************************!*\
  !*** ./src/components/noteDocs/NoteDocInput.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteDocInput: () => (/* binding */ NoteDocInput),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");





const NoteDocInput = props => {
  const [docTitel, setDocTitel] = react__WEBPACK_IMPORTED_MODULE_1__.useState("Doc Name");
  const [docURL, setDocURL] = react__WEBPACK_IMPORTED_MODULE_1__.useState("Doc Link");
  const [docDescription, setDocDescription] = react__WEBPACK_IMPORTED_MODULE_1__.useState("Doc Description");
  const handeldocTitelChange = event => {
    setDocTitel(event.target.value);
  };
  const handeldocURLChange = event => {
    setDocURL(event.target.value);
  };
  const noteDocUpdates = {
    noteID: props.activeNoteID,
    docCategorie: props.categorie,
    docTitel: docTitel,
    docURL: docURL,
    docAdded: moment__WEBPACK_IMPORTED_MODULE_0___default()().format(),
    docDescription: docDescription
  };

  // const showDoupleDoc = (noteDocURL) => {
  //   const noteDocs = props.noteDocs

  //   var uniqueValues = new Set(noteDocs.map((noteDoc) => noteDoc.docURL));

  //   const found = uniqueValues.has(noteDocURL);

  //   console.log(found);
  // };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "outlined-uncontrolled",
    label: "Linke Titel",
    value: docTitel,
    onChange: e => setDocTitel(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "outlined-uncontrolled",
    label: "Link URL",
    value: docURL,
    onChange: e => setDocURL(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "outlined-uncontrolled",
    label: "Doc Description",
    value: docDescription,
    onChange: e => setDocDescription(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => {
      props.editExpense(props.activeNoteID, {
        docCounter: props.docCounter + 1
      });
      // props.editActiveNote({docCounter:props.docCounter+1})
      props.addNoteDoc(
      // props.activeNoteID,
      noteDocUpdates), setDocURL(""), setDocTitel(""), setDocDescription("");
    }
  }, "Add Document")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)("", "")(NoteDocInput));

/***/ }),

/***/ "./src/components/noteDocs/NoteDocView.js":
/*!************************************************!*\
  !*** ./src/components/noteDocs/NoteDocView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteDocView: () => (/* binding */ NoteDocView)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _doubleCheckRemoveNoteDoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doubleCheckRemoveNoteDoc */ "./src/components/noteDocs/doubleCheckRemoveNoteDoc.js");




const NoteDocView = props => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  // const handelRemoveNote = (props) => {
  //   props.handelRemoveNote({ id: props.activeNote.id });
  //   handleClose();
  // };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      m: 2,
      width: "98%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }, props.noteDocs.map(noteDoc => {
    if (props.activeNoteID != "" && noteDoc.noteID === props.activeNoteID) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        item: true,
        key: noteDoc.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: noteDoc.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: noteDoc.docURL,
        target: "_blank"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: noteDoc.docTitel.substring(0, 30)
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_doubleCheckRemoveNoteDoc__WEBPACK_IMPORTED_MODULE_1__.DoubleCheckRemove, {
        props: props,
        activeNoteDoc: noteDoc
      })));
    } else {
      return "";
    }
  }))));
};

/***/ }),

/***/ "./src/components/noteDocs/doubleCheckRemoveNoteDoc.js":
/*!*************************************************************!*\
  !*** ./src/components/noteDocs/doubleCheckRemoveNoteDoc.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoubleCheckRemove: () => (/* binding */ DoubleCheckRemove)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContentText/DialogContentText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Clear */ "./node_modules/@mui/icons-material/Clear.js");



function DoubleCheckRemove(props) {
  const activeNoteDoc = props.activeNoteDoc;
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handelRemoveNote = (props, activeNoteDoc) => {
    props.props.editNoteDoc(activeNoteDoc.id, {
      noteID: ""
    });
    handleClose();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: () => handleClickOpen()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "alert-dialog-title"
  }, "Soll die Note gelöscht werden?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "alert-dialog-description"
  }, "Added: ", activeNoteDoc.docAdded), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "alert-dialog-description"
  }, "Titel: ", activeNoteDoc.docTitel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "alert-dialog-description"
  }, "docURL: ", activeNoteDoc.docURL)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handelRemoveNote(props, activeNoteDoc),
    color: "error",
    variant: "outlined",
    autoFocus: true
  }, "L\xF6schen"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
}
{
  /* <Button variant="contained" color="error" onClick={handleClickOpen}>
        Remove
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Soll das Document gelöscht werden?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Titel: {props.docTitel}
          </DialogContentText>
            <DialogContentText id="alert-dialog-description">
            Description:{props.docDescription}
          </DialogContentText>
            <DialogContentText id="alert-dialog-description">
            URL:{props.docURL}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handelRemoveNote(props)}
            color="error"
            variant="outlined"
            autoFocus
          >
            Löschen
          </Button>
        </DialogActions>
      </Dialog> */
}
// </Box>

/***/ }),

/***/ "./src/components/showNoteList.js":
/*!****************************************!*\
  !*** ./src/components/showNoteList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowNotes: () => (/* binding */ ShowNotes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotesDashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesDashboard */ "./src/components/NotesDashboard.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Warning */ "./node_modules/@mui/icons-material/Warning.js");
/* harmony import */ var _mui_icons_material_Cached__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Cached */ "./node_modules/@mui/icons-material/Cached.js");
/* harmony import */ var _Button_AddNote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button/AddNote */ "./src/components/Button/AddNote.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_PictureAsPdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/PictureAsPdf */ "./node_modules/@mui/icons-material/PictureAsPdf.js");








const SkipButton = _ref => {
  let {
    props,
    updates
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small",
    color: "primary",
    onClick: () => (0,_Button_AddNote__WEBPACK_IMPORTED_MODULE_2__.handelTakeChanges)(props, updates)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cached__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};
const showHintForTimedNotes = expense => {
  const days = expense.absDatesToFinish;
  const daySubStrin = parseInt(days);
  if (days > -0.4 && days < 0.6) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      mr: 1,
      style: {
        color: "green",
        backgroundColor: "powderblue"
      }
    }, "Today");
  }
  if (days < -0.4) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      container: true,
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: "error"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      mr: 1,
      style: {
        color: "darkred",
        backgroundColor: "peachpuff"
      }
    }, daySubStrin, "D"));
  }
  return null;
};
const showDocCounter = expense => {
  const docCounter = expense.docCounter;
  if (docCounter > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_PictureAsPdf__WEBPACK_IMPORTED_MODULE_9__["default"], null));
  }
  return null;
};
function ShowNotes(_ref2) {
  let {
    expenses,
    noteListStatus,
    activeCategorie,
    props
  } = _ref2;
  const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleListItemClick = (expense, event, index) => {
    setSelectedIndex(index);
    (0,_NotesDashboard__WEBPACK_IMPORTED_MODULE_1__.setActiveNote)(expense, props);
  };
  const filteredExpenses = expenses.filter(expense => {
    switch (noteListStatus) {
      case "allOpen":
        return expense.noteStatus === "open" && expense.absDatesToFinish < 0.6;
      case "openTomorrow":
        return expense.absDatesToFinish < 1.4 && expense.absDatesToFinish > 0.6 && expense.noteStatus !== "closed";
      case "openAfterTomorrow":
        return expense.absDatesToFinish < 2.2 && expense.absDatesToFinish > 1.4 && expense.noteStatus !== "closed";
      default:
        return expense.noteStatus === noteListStatus;
    }
  }).filter(expense => activeCategorie.catName === "ALL" ? true : expense.categorie === activeCategorie.catName);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, filteredExpenses.map((expense, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: expense.id,
    elevation: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    key: expense.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    dense: true,
    selected: selectedIndex === index,
    onClick: event => handleListItemClick(expense, event, index)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 1
  }, showHintForTimedNotes(expense), showDocCounter(expense)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: expense.id,
    primary: expense.description,
    secondary: expense.noteDecscription ? expense.noteDecscription.substr(0, 270).replace(/<[^>]+>/g, "") : ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      maxHeight: 90
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    direction: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2",
    style: {
      color: "slategray"
    }
  }, expense.categorie.substr(0, 8))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SkipButton, {
    props: props,
    updates: {
      id: expense.id,
      datesToFinish: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(1, "days")
    }
  }))))))))))));
}

/***/ }),

/***/ "./src/reducers/activeNote.js":
/*!************************************!*\
  !*** ./src/reducers/activeNote.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const activeNoteReducerDefaultState = [];
const activeNoteReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeNoteReducerDefaultState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case "ADD_ACTIVE_NOTE":
      return {
        ...action.activeNote
      };
    case "REMOVE_ACTIVE_NOTE":
      return state = [];
    case "EDIT_ACTIVE_NOTE":
      return {
        ...state,
        ...action.updates
      };
    case "ADD_NOTE_STORY_ACTIVE_NOTE":
      return {
        ...state
      };
    case "EDIT_NOTE_STORY_ACTIVE_NOTE":
      return {
        ...state
      };
    case "EDIT_ACtiVENOTE_BUZWORD":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
            bTitel: action.updates.buzwords.map(titel => {
              return titel.titel;
            })
          };
        } else {
          return expense;
        }
      });

    // case "ADD_ACtiVENOTE_URL":
    //   return state.map((expense) => {
    //     if (expense.id === action.id) {
    //       return {
    //         ...expense,
    //         ...action.updates,
    //         linkTitel: action.updates.map((linkTitel) => {
    //           return linkTitel.linkTitel;
    //         }),
    //         linkURL: action.updates.map((linkURL) => {
    //           return linkURL.linkURL;
    //         }),
    //       };
    //     } else {
    //       return expense;
    //     }
    //   });

    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activeNoteReducer);
const convertArrayToObject = function (columns) {
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "id";
  const initialValue = {};
  return columns.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item
    };
  }, initialValue);
};

/***/ }),

/***/ "./src/reducers/buzwords.js":
/*!**********************************!*\
  !*** ./src/reducers/buzwords.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buzwordReducerDefaultState = [];
const buzwordsReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : buzwordReducerDefaultState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case "ADD_BUZWORD":
      return [...state, action.buzword];
    case "EDIT_BUZWORD":
      return state.map(buzword => {
        if (buzword.id === action.id) {
          return {
            ...buzword,
            ...action.updates
          };
        } else {
          return buzword;
        }
      });

    // case "ADD_NOTE_TO_BUZWORD":
    // return state.map((buzword)=>{
    //   buzword.id === action.id
    // })

    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buzwordsReducer);

/***/ }),

/***/ "./src/reducers/categorie.js":
/*!***********************************!*\
  !*** ./src/reducers/categorie.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const categorieDefaultState = [];
const categorieReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : categorieDefaultState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'SET_CATEGORIE':
      return [...state, action.categorie];
    case 'EDIT_CATEGORIE':
      return state.map(categorie => {
        if (categorie.id === action.id) {
          return {
            ...categorie,
            ...action.updates
          };
        } else {
          return categorie;
        }
        ;
      });
    case 'REMOVE_CATEGORIE':
      return state.filter(_ref => {
        let {
          id
        } = _ref;
        return id !== action.id;
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorieReducer);

/***/ }),

/***/ "./src/reducers/filters.js":
/*!*********************************!*\
  !*** ./src/reducers/filters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'sRelvance',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : filtersReducerDefaultState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_RELEVANCE':
      return {
        ...state,
        sortBy: 'sRelevance'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filtersReducer);

/***/ }),

/***/ "./src/reducers/globalVariables.js":
/*!*****************************************!*\
  !*** ./src/reducers/globalVariables.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const globalVariablesDefaultState = {
  autoSave: 1,
  onOffSwitch: true
  // activeCategorie: "ALL"
  // dayCounter_current:"",
  // dayCounter_one:"",
  // dayCounter_tow:"", 
  //  weekCounter:"",
  // oneMonthCoutner:"",
  // twoMonthCoutner:"",
  // threeMonthCoutner:"",
  // dateTime_current:"", 
  // dateTime_one:"", 
  // dateTime_tow:"", 
  // task_current:"", 
  // task_tomorrow:"",
  // task_afert_Tomorrow:""
};
const globalVariabels = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : globalVariablesDefaultState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case "SET_GLOBALVARIABLES":
      return [...state, action.globalVariables];
    case "EDIT_GLOBALVARIABLES":
      return {
        ...state,
        ...action.updates
      };
    case "EDIT_GLOBALCOUNTERVARIABLES":
      return {
        ...state,
        ...action.updates
      };
    case "REMOVE_GLOBALVARIABLES":
      return state.filter(_ref => {
        let {
          id
        } = _ref;
        return id !== action.id;
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalVariabels);

/***/ }),

/***/ "./src/reducers/notes.js":
/*!*******************************!*\
  !*** ./src/reducers/notes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const expensesReducerDefaultState = [];
const expensesReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : expensesReducerDefaultState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(_ref => {
        let {
          id
        } = _ref;
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    case "EDIT_EXPENSE_BUZWORD":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
            bTitel: action.updates.buzwords.map(titel => {
              return titel.titel;
            })
          };
        } else {
          return expense;
        }
      });
    case "ADD_NOTE_STORY":
      return state.map(expense => {
        if (expense.id === action.noteId) {
          return {
            ...expense
          };
        } else {
          return expense;
        }
      });
    case "EDIT_NOTE_STORY":
      return {
        ...expense
      };
    case "ADD_ACtiVENOTE_URL":
      // return  console.log("Notes reducer State ", state, action) 
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
            ...(expense.linkTitel = action.updates.map(linkTitel => {
              return linkTitel.linkTitel;
            })),
            ...(expense.linkURL = action.updates.map(linkURL => {
              return linkURL.linkTitel;
            }))
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (expensesReducer);
const convertArrayToObject = function (columns) {
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "id";
  const initialValue = {};
  return columns.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item
    };
  }, initialValue);
};

/***/ }),

/***/ "./src/selectors/activeNote.js":
/*!*************************************!*\
  !*** ./src/selectors/activeNote.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveNotes: () => (/* binding */ getActiveNotes),
/* harmony export */   getAllActiveNotes: () => (/* binding */ getAllActiveNotes)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/dist/reselect.mjs");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);


const getActiveNotes = state => state.activeNote;
const getAllActiveNotes = (0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getActiveNotes, activeNotes => ({
  id: activeNotes.id ? activeNotes.id : "",
  categorie: activeNotes.categorie ? activeNotes.categorie : "",
  noteUpdateDate: activeNotes.noteUpdateDate ? activeNotes.noteUpdateDate : "",
  noteStatus: activeNotes.noteStatus ? activeNotes.noteStatus : "",
  description: activeNotes.description ? activeNotes.description : "",
  prio: activeNotes.prio ? activeNotes.prio : "",
  sRelevance: activeNotes.sRelevance ? activeNotes.sRelevance : "",
  relevance: activeNotes.relevance ? activeNotes.relevance : "",
  important: activeNotes.important ? activeNotes.important : "",
  noteDecscription: activeNotes.noteDecscription ? activeNotes.noteDecscription : "",
  datesToFinish: activeNotes.datesToFinish ? activeNotes.datesToFinish : "",
  nextStep: activeNotes.nextStep ? activeNotes.nextStep : "",
  riskAuswirkung: activeNotes.riskAuswirkung ? activeNotes.riskAuswirkung : "",
  riskWahrscheinlichkeit: activeNotes.riskWahrscheinlichkeit ? activeNotes.riskWahrscheinlichkeit : "",
  infoNote: activeNotes.infoNote ? activeNotes.infoNote : "",
  journalNote: activeNotes.journalNote ? activeNotes.journalNote : "",
  snooze: activeNotes.snooze ? activeNotes.snooze : "",
  onHold: activeNotes.onHold ? activeNotes.onHold : "",
  effort: activeNotes.effort ? activeNotes.effort : "",
  linkTitel: activeNotes.linkTitel ? activeNotes.linkTitel : "",
  linkURL: activeNotes.linkURL ? activeNotes.linkURL : "",
  buzwords: activeNotes.buzwords ? activeNotes.buzwords : [],
  bTitel: activeNotes.bTitel ? activeNotes.bTitel : [],
  docCounter: activeNotes.docCounter ? activeNotes.docCounter : 0
}));

/***/ }),

/***/ "./src/selectors/autoSave.js":
/*!***********************************!*\
  !*** ./src/selectors/autoSave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllGlobalVariables: () => (/* binding */ getAllGlobalVariables),
/* harmony export */   getGlobalVariables: () => (/* binding */ getGlobalVariables)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/dist/reselect.mjs");

const getGlobalVariables = state => state.globalVariables;
const getAllGlobalVariables = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getGlobalVariables, globalVariables => globalVariables.map(globalVariable => ({
  autoSave: globalVariable.autoSave ? globalVariable.autoSave : 2,
  onOffSwitch: globalVariable.onOffSwitch ? globalVariable.onOffSwitch : true,
  counterDay: globalVariable.counterDay ? globalVariable.counterDay : 0,
  counterWeek: globalVariable.counterWeek ? globalVariable.counterWeek : 0,
  counterOneMonth: globalVariable.counterOneMonth ? globalVariable.counterOneMonth : 0,
  counterTwoMonth: globalVariable.counterTwoMonth ? globalVariable.counterTwoMonth : 0,
  counterThreeMonth: globalVariable.counterThreeMonth ? globalVariable.counterThreeMonth : 0,
  task_current: "",
  task_tomorrow: 0,
  task_afert_Tomorrow: 0
})));

// export function taskCurrent(absDatesToFinish) {}

/***/ }),

/***/ "./src/selectors/buzwords.js":
/*!***********************************!*\
  !*** ./src/selectors/buzwords.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllBuzwords: () => (/* binding */ getAllBuzwords),
/* harmony export */   getBuzwords: () => (/* binding */ getBuzwords)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/dist/reselect.mjs");

const getBuzwords = state => state.buzwords;
const getAllBuzwords = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getBuzwords, buzwords => buzwords.map(buzword => ({
  id: buzword.id ? buzword.id : "",
  titel: buzword.titel ? buzword.titel : "",
  notes: buzword.notes ? buzword.notes : ""
})));

/***/ }),

/***/ "./src/store/configureStore.js":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   locCache: () => (/* binding */ locCache),
/* harmony export */   setLocalStorageState: () => (/* binding */ setLocalStorageState)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/dist/redux.mjs");
/* harmony import */ var _reducers_notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/notes */ "./src/reducers/notes.js");
/* harmony import */ var _reducers_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/filters */ "./src/reducers/filters.js");
/* harmony import */ var _reducers_categorie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/categorie */ "./src/reducers/categorie.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/dist/redux-thunk.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/store/constants.js");
/* harmony import */ var _reducers_globalVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/globalVariables */ "./src/reducers/globalVariables.js");
/* harmony import */ var _reducers_activeNote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/activeNote */ "./src/reducers/activeNote.js");
/* harmony import */ var _reducers_buzwords__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/buzwords */ "./src/reducers/buzwords.js");
/* harmony import */ var _reducers_noteDocs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/noteDocs */ "./src/reducers/noteDocs");










const composerFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_8__.compose;
const getLocalStorageState = () => {
  const cache = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_3__.localStorageKey);
  return cache ? JSON.parse(cache) : {};
};
const setLocalStorageState = cache => {
  localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_3__.localStorageKey, cache);
  return getLocalStorageState();
};
const locCache = () => {
  const cache = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_3__.localStorageKey);
  return cache;
};
const store = (0,redux__WEBPACK_IMPORTED_MODULE_8__.combineReducers)({
  expenses: _reducers_notes__WEBPACK_IMPORTED_MODULE_0__["default"],
  filters: _reducers_filters__WEBPACK_IMPORTED_MODULE_1__["default"],
  categories: _reducers_categorie__WEBPACK_IMPORTED_MODULE_2__["default"],
  globalVariables: _reducers_globalVariables__WEBPACK_IMPORTED_MODULE_4__["default"],
  activeNote: _reducers_activeNote__WEBPACK_IMPORTED_MODULE_5__["default"],
  buzwords: _reducers_buzwords__WEBPACK_IMPORTED_MODULE_6__["default"],
  noteDocs: _reducers_noteDocs__WEBPACK_IMPORTED_MODULE_7__["default"]
});
const loggingMiddleware = store => next => action => {
  console.groupCollapsed(action.type);
  console.log("Action:", action);
  console.log("State - Before:", store.getState());
  const result = next(action);
  console.log("State - After:", store.getState());
  console.groupEnd(action.type);
  return result;
};
const localStorageMiddleware = store => next => action => {
  const result = next(action);
  const state = JSON.stringify(store.getState());
  localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_3__.localStorageKey, state);
  return result;
};
const middelwares = (0,redux__WEBPACK_IMPORTED_MODULE_8__.applyMiddleware)(localStorageMiddleware, loggingMiddleware);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_8__.createStore)(store, getLocalStorageState(), composerFunction((0,redux__WEBPACK_IMPORTED_MODULE_8__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_9__.thunk), middelwares)));

/***/ }),

/***/ "./src/store/constants.js":
/*!********************************!*\
  !*** ./src/store/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localStorageKey: () => (/* binding */ localStorageKey)
/* harmony export */ });
const localStorageKey = '__TODO_APP_Store__';

/***/ }),

/***/ "./src/reducers/noteDocs":
/*!*******************************!*\
  !*** ./src/reducers/noteDocs ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const noteDocReducerDefaultState = [];

const noteDocReducer = (state = noteDocReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_NOTE_DOC":
      return [...state, action.noteDoc];

      case "EDIT_NOTE_DOC":
        return state.map((noteDoc) => {
          if (noteDoc.id === action.id) {
            return {
              ...noteDoc,
              ...action.updates,
            };
          } else {
            return noteDoc;
          }
        });

        case "REMOVE_NOTE_DOC":
          return state.filter(({ id }) => id !== action.id);

    // case "EDIT_BUZWORD":
    //   return state.map((buzword) => {
    //     if (buzword.id === action.id) {
    //       return {
    //         ...buzword,
    //         ...action.updates,
    //       };
    //     } else {
    //       return buzword;
    //     }
    //   });

    // case "ADD_NOTE_TO_BUZWORD":
    // return state.map((buzword)=>{
    //   buzword.id === action.id
    // })

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noteDocReducer);


/***/ })

}]);
//# sourceMappingURL=src_components_NotesDashboard_js.bundle.js.map