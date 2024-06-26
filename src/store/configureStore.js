import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/notes";
import filtersReducer from "../reducers/filters";
import categorieReducer from "../reducers/categorie";
import { thunk } from "redux-thunk";
import { localStorageKey } from "./constants";
import globalVariabels from "../reducers/globalVariables";
import activeNoteReducer from "../reducers/activeNote";

import buzwordsReducer from "../reducers/buzwords";
import noteDocReducer from "../reducers/noteDocs";

const composerFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getLocalStorageState = () => {
  const cache = localStorage.getItem(localStorageKey);
  return cache ? JSON.parse(cache) : {};
};

export const setLocalStorageState = (cache) => {
  localStorage.setItem(localStorageKey, cache);
  return getLocalStorageState();
};

export const locCache = () => {
  const cache = localStorage.getItem(localStorageKey);
  return cache;
};

const store = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  categories: categorieReducer,
  globalVariables: globalVariabels,
  activeNote: activeNoteReducer,
  buzwords: buzwordsReducer,
  noteDocs: noteDocReducer,
});

const loggingMiddleware = (store) => (next) => (action) => {
  console.groupCollapsed(action.type);
  console.log("Action:", action);
  console.log("State - Before:", store.getState());
  const result = next(action);
  console.log("State - After:", store.getState());
  console.groupEnd(action.type);

  return result;
};

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = JSON.stringify(store.getState());
  localStorage.setItem(localStorageKey, state);
  return result;
};

const middelwares = applyMiddleware(localStorageMiddleware, loggingMiddleware);

export default createStore(
  store,
  getLocalStorageState(),
  composerFunction(applyMiddleware(thunk), middelwares)
);
