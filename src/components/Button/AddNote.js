import { autoSaveFunc } from "../inputs/autoSave";
import DoubleCheckRemoveButton from "./DoubleCheckRemoveButton";

export function handelAddNote(props, updates) {
  props.addExpense(updates);
  autoSaveFunc(props);
}

export function handelTakeChanges(props, updates) {

  console.log(
    "Take Changes PROPS: ", props,
     "Updates: ", updates);
  props.editExpense(updates.id, updates);
  // autoSaveFunc(props);
}

export function handelRemoveNote(props, updates) {
  props.removeExpense({ id: updates.id });
  autoSaveFunc(props);
}
