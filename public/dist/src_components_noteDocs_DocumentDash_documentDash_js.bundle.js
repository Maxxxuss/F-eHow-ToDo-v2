"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_components_noteDocs_DocumentDash_documentDash_js"],{

/***/ "./node_modules/@mui/icons-material/Filter2.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/icons-material/Filter2.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


"use client";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _default = exports["default"] = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16H7V3h14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6z"
}), 'Filter2');

/***/ }),

/***/ "./node_modules/@mui/icons-material/Info.js":
/*!**************************************************!*\
  !*** ./node_modules/@mui/icons-material/Info.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


"use client";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _default = exports["default"] = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
}), 'Info');

/***/ }),

/***/ "./node_modules/@mui/icons-material/LayersClear.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/icons-material/LayersClear.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


"use client";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _default = exports["default"] = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m19.81 14.99 1.19-.92-1.43-1.43-1.19.92zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88zM3.27 1 2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73z"
}), 'LayersClear');

/***/ }),

/***/ "./src/components/noteDocs/DocumentDash/DocumentDashDetails.js":
/*!*********************************************************************!*\
  !*** ./src/components/noteDocs/DocumentDash/DocumentDashDetails.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocDashDetails: () => (/* binding */ DocDashDetails)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ButtonGroup/ButtonGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_DoubleCheckRemoveButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Button/DoubleCheckRemoveButton */ "./src/components/Button/DoubleCheckRemoveButton.js");
/* harmony import */ var _doubleChecDeleteNoteDoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../doubleChecDeleteNoteDoc */ "./src/components/noteDocs/doubleChecDeleteNoteDoc.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






function DocDashDetails(props) {
  const DocDetail = props;
  const editDoc = props.showDocuDashPROPS.editNoteDoc;
  const removeNoteDoc = props.showDocuDashPROPS.removeNoteDoc;
  const activeNoteDoc = props.activeNoteDoc;
  const [docID, setDocID] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.activeNoteDoc.id);
  const [docTitel, setDocTitel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.activeNoteDoc.docTitel === "" ? props.activeNoteDoc.docTitel : "");
  const [docURL, setDocURL] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.activeNoteDoc.docURL === "" ? props.activeNoteDoc.docURL : "");
  const [docDescription, setDocDescription] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.activeNoteDoc.docDescription === "" ? props.activeNoteDoc.docDescription : "");
  const [docAdded, setDocAdded] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.activeNoteDoc.docAdded === "" ? props.activeNoteDoc.docAdded : "");
  const [activeCategorie, setActiveCategorie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [inputCategorie, setInputCategorie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const handeldocTitelChange = event => {
    setDocTitel(event.target.value);
  };
  const handeldocURLChange = event => {
    setDocURL(event.target.value);
  };
  const handelDocDescription = event => {
    setDocDescription(event.target.value);
  };
  const noteDocUpdates = {
    noteID: "",
    docCategorie: inputCategorie ? inputCategorie : props.showDocuDashPROPS.activeCategorie.catName,
    docTitel: docTitel,
    docURL: docURL,
    docAdded: moment__WEBPACK_IMPORTED_MODULE_0___default()().format(),
    docDescription: docDescription,
    noteID: props.activeNoteDoc.noteID
  };
  if (docID != props.activeNoteDoc.id) {
    setDocID(props.activeNoteDoc.id);
    setDocDescription(props.activeNoteDoc.docDescription), setDocTitel(props.activeNoteDoc.docTitel), setDocURL(props.activeNoteDoc.docURL);
    setDocAdded(props.activeNoteDoc.docAdded);
    setInputCategorie("");
    setActiveCategorie("");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mb: 2,
    mt: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fullWidth: true
    //  variant="contained" size="small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "primary",
    onClick: () => {
      setDocTitel("");
      setActiveCategorie("");
      setDocURL("");
      setDocDescription("");
      setDocAdded("");
      setActiveCategorie("");
    }
  }, "clear"), docAdded === "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "primary",
    onClick: () => props.showDocuDashPROPS.props.addNoteDoc(noteDocUpdates)
  }, "Add") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "primary",
    onClick: () => props.showDocuDashPROPS.props.editNoteDoc(props.activeNoteDoc.id, noteDocUpdates)
  }, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_doubleChecDeleteNoteDoc__WEBPACK_IMPORTED_MODULE_3__.DoubleCheckDelete, {
    props: props
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    label: "Doc Titel ",
    value: docTitel,
    onChange: e => setDocTitel(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: activeCategorie,
    onChange: (e, newValue) => {
      setActiveCategorie(newValue);
    },
    inputValue: inputCategorie,
    onInputChange: (e, newInputValue) => {
      setInputCategorie(newInputValue);
    },
    options: props.showDocuDashPROPS.props.categories,
    getOptionLabel: option => option.catName ? option.catName : "",
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, params, {
      label: "Project",
      variant: "filled",
      color: "secondary"
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: docURL,
    color: "primary",
    target: "_blank"
  }, "Open-Link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 9,
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    label: "Doc URL",
    value: docURL,
    onChange: e => setDocURL(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    multiline: true,
    label: "Doc Description",
    value: docDescription,
    onChange: e => setDocDescription(e.target.value)
  })))));
}

/***/ }),

/***/ "./src/components/noteDocs/DocumentDash/documentDash.js":
/*!**************************************************************!*\
  !*** ./src/components/noteDocs/DocumentDash/documentDash.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentDash: () => (/* binding */ DocumentDash),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _actions_noteDoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/noteDoc */ "./src/actions/noteDoc.js");
/* harmony import */ var _selectors_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../selectors/categories */ "./src/selectors/categories.js");
/* harmony import */ var _selectors_noteDoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../selectors/noteDoc */ "./src/selectors/noteDoc.js");
/* harmony import */ var _ShowDocumentsDash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ShowDocumentsDash */ "./src/components/noteDocs/ShowDocumentsDash.js");
/* harmony import */ var _selectors_notes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../selectors/notes */ "./src/selectors/notes.js");








function DocumentDash(props) {
  const [activeCategorie, setActiveCategorie] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    catName: "ALL"
  });
  const [tabCategorie, setTabCategorie] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [dupChecker, setDubChecked] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const ProjectTab = categories => categories.map((categorie, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: categorie.sorting ? categorie.sorting : index,
    label: categorie.catName,
    onClick: () => setActiveCategorie(categorie)
    // console.log("categorie Change: ", categorie)
  }));
  const handleChange = () => {
    setDubChecked(prev => !prev);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mt: 2,
    mb: 2,
    mr: 2,
    ml: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: "/",
    style: {
      // backgroundColor: "yellow",
      padding: "20"
    }
  }, "Task Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    position: "static",
    color: "default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    alignItems: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    value: tabCategorie,
    onChange: (e, newValue) => setTabCategorie(newValue),
    variant: "scrollable",
    scrollButtons: "auto",
    "aria-label": "scrollable auto tabs example"
  }, ProjectTab(props.categories)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mt: 2,
    mb: 2,
    mr: 2,
    ml: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      checked: dupChecker,
      onChange: handleChange
    }),
    label: "DupChecker"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShowDocumentsDash__WEBPACK_IMPORTED_MODULE_4__.ShowDocumentDash, {
    props: props,
    activeCategorie: activeCategorie,
    removeNoteDoc: _actions_noteDoc__WEBPACK_IMPORTED_MODULE_1__.removeNoteDoc,
    editNoteDoc: _actions_noteDoc__WEBPACK_IMPORTED_MODULE_1__.editNoteDoc,
    dupChecker: dupChecker
  })));
}
const mapStateToProps = state => {
  return {
    // activeNote: getAllActiveNotes(state),
    expenses: (0,_selectors_notes__WEBPACK_IMPORTED_MODULE_5__.getAllExpenses)(state),
    // openExpenses: getAllExpenses(state)
    //   .sort((a, b) => (a.prio > b.prio ? -1 : 1))
    //   .filter((expense) => expense.noteStatus === "open"),
    categories: (0,_selectors_categories__WEBPACK_IMPORTED_MODULE_2__.getAllCategories)(state).sort((a, b) => a.sorting > b.sorting ? 1 : -1),
    // globalVariables: getGlobalVariables(state),
    // buzwords: getAllBuzwords(state),
    noteDocs: (0,_selectors_noteDoc__WEBPACK_IMPORTED_MODULE_3__.getAllNoteDocs)(state).sort((a, b) => a.docAdded > b.docAdded ? -1 : 1)
  };
};
const mapDispatchToProps = dispatch => ({
  //   setCategorie: (categorie) => dispatch(setCategorie(categorie)),
  //   removeCategorie: (id) => dispatch(removeCategorie(id)),
  //   addActiveNote: (activeNote) => dispatch(addActiveNote(activeNote)),
  //   editActiveNote: (updates) => dispatch(editActiveNote(updates)),
  //   removeActiveNote: () => dispatch(removeActiveNote()),
  removeNoteDoc: id => dispatch((0,_actions_noteDoc__WEBPACK_IMPORTED_MODULE_1__.removeNoteDoc)(id)),
  addNoteDoc: expense => dispatch((0,_actions_noteDoc__WEBPACK_IMPORTED_MODULE_1__.addNoteDoc)(expense)),
  editNoteDoc: (id, updates) => dispatch((0,_actions_noteDoc__WEBPACK_IMPORTED_MODULE_1__.editNoteDoc)(id, updates))
  //   editExpenseBuzword: (id, updates) =>
  //     dispatch(editExpenseBuzword(id, updates)),

  //   editGlobalVariables: (autoSave) => dispatch(editGlobalVariables(autoSave)),
  //   startStory: (id) => dispatch(startStory(id)),

  //   // BuzWords
  //   addBuzword: (buzword) => dispatch(addBuzword(buzword)),
  //   editBuzword: (id, updates) => dispatch(editBuzword(id, updates)),
  //   addNoteDoc: (id, updates) => dispatch(addNoteDoc(id, updates)),
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_14__.connect)(mapStateToProps, mapDispatchToProps)(DocumentDash));

/***/ }),

/***/ "./src/components/noteDocs/ShowDocumentsDash.js":
/*!******************************************************!*\
  !*** ./src/components/noteDocs/ShowDocumentsDash.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowDocumentDash: () => (/* binding */ ShowDocumentDash)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DocumentDash_DocumentDashDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentDash/DocumentDashDetails */ "./src/components/noteDocs/DocumentDash/DocumentDashDetails.js");
/* harmony import */ var _mui_icons_material_LayersClear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/LayersClear */ "./node_modules/@mui/icons-material/LayersClear.js");
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Info */ "./node_modules/@mui/icons-material/Info.js");
/* harmony import */ var _mui_icons_material_Filter2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Filter2 */ "./node_modules/@mui/icons-material/Filter2.js");



//LayersClearIcon, wenn Note gelöscht wurde 

//Info Icon wenn nur das Doc/ der Link erstellt wurden ohne Note 

//FilterIcon wenn Doppelte Notes vorhanden sind


function ShowDocumentDash(props) {
  const noteDocs = props.props.noteDocs;
  const expenses = props.props.expenses;
  const dupChecker = props.dupChecker;
  const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [activeNoteDoc, setActiveNoteDoc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const handleListItemClick = (noteDoc, props, event, index) => {
    setSelectedIndex(index);
    setActiveNoteDoc(noteDoc);
  };
  console.log("ShowDocumentDash PROPS-PROPS ", props);
  const showDeletedNoteIcon = (noteDocID, noteDoc) => {
    const find = props.props.expenses.find(expense => expense.id === noteDocID);
    if (find === undefined) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_LayersClear__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fontSize: "small"
      })

      // <Button
      // onClick={() => props.props.removeNoteDoc({id:noteDoc.id})}
      // // onClick={()=> console.log(noteDoc.id) }

      // >
      //   remove
      // </Button>

      // <LayersClearIcon
      // fontSize="small"
      // />
      ;
    }
  };

  // Anzeigen Doppelter DocURLS -  N E X T Hinzufügen Button für FilterSuche 
  const showDoupleDoc = noteDocURL => {
    const find = props.props.noteDocs.find(noteDoc => noteDoc.docURL === noteDocURL);

    // ! ! ! ! ! ! !

    var uniqueValues = new Set(noteDocs.map(noteDoc => noteDoc.docURL));
    const found = uniqueValues.has(noteDocURL);
    var counter = noteDocs.map(noteDoc => noteDoc.docURL === noteDocURL);
    const multipleDocs = counter.filter(Boolean).length;
    if (multipleDocs != 1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Filter2__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    }

    // console.log(multipleDocs);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    alignItems: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, noteDocs.filter(noteDoc => props.activeCategorie.catName === "ALL" ? noteDoc : noteDoc.docCategorie === props.activeCategorie.catName).map((noteDoc, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: noteDoc.id,
      elevation: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      direction: "column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: noteDoc.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      dense: true,
      selected: selectedIndex === index,
      onClick: event => handleListItemClick(noteDoc, props, event, index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "body2",
      style: {
        color: "SlateGray"
      }
    }, noteDoc.noteID ? showDeletedNoteIcon(noteDoc.noteID, noteDoc) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_11__["default"], {
      fontSize: "small"
    }), dupChecker ? showDoupleDoc(noteDoc.docURL) : "", noteDoc.docAdded.substr(0, 10))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: noteDoc.id,
      primary: noteDoc.docTitel,
      secondary: noteDoc.docDescription.substr(0, 270).replace(/<[^>]+>/g, "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        maxHeight: 90
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      direction: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "body2",
      style: {
        color: "SlateGray"
      }
    }, noteDoc.docCategorie.substr(0, 8))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      href: noteDoc.docURL,
      color: "primary",
      target: "_blank"
    }, "Link"))))))))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ml: 2,
    sx: {
      position: "-webkit-sticky",
      position: " sticky",
      top: 300
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DocumentDash_DocumentDashDetails__WEBPACK_IMPORTED_MODULE_1__.DocDashDetails, {
    showDocuDashPROPS: props,
    activeNoteDoc: activeNoteDoc
  }))));
}

/***/ }),

/***/ "./src/components/noteDocs/doubleChecDeleteNoteDoc.js":
/*!************************************************************!*\
  !*** ./src/components/noteDocs/doubleChecDeleteNoteDoc.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoubleCheckDelete: () => (/* binding */ DoubleCheckDelete)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContentText/DialogContentText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function DoubleCheckDelete(props) {
  const activeNoteDoc = props.props.activeNoteDoc;
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handelRemoveNote = (props, activeNoteDoc) => {
    props.props.showDocuDashPROPS.props.removeNoteDoc({
      id: activeNoteDoc.id
    });
    handleClose();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "error",
    onClick: handleClickOpen
  }, "Remove"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, "docURL: ", activeNoteDoc.docURL)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: () => handelRemoveNote(props, activeNoteDoc),
    color: "error",
    variant: "outlined",
    autoFocus: true
  }, "L\xF6schen"))));
}

/***/ })

}]);
//# sourceMappingURL=src_components_noteDocs_DocumentDash_documentDash_js.bundle.js.map