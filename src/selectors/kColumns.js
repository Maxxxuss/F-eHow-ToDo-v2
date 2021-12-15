import { createSelector } from "reselect";

export const getkColumns = (state) => state.kColumns;

export const getAllColumns = createSelector(getkColumns);
