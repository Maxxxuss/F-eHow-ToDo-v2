import { createSelector } from "reselect";

export const getBuzwords = (state) => state.buzwords;

export const getAllBuzwords = createSelector(getBuzwords, (buzwords) =>
  buzwords.map((buzword) => ({
    id: buzword.id ? buzword.id : "",
    titel: buzword.titel ? buzword.titel : "",
  }))
);
