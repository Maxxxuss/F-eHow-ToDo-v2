import { createSelector } from "reselect";

export const getkColumns = (state) => state.kColumns;

// export const getAllColumns = createSelector(getkColumns, (kColumns) =>(
//   kColumns.map((kColumn) => ({
//     id: kColumn.id ? kColumn.id : "",
//     name: kColumn.name ? kColumn.name : "",
//     cardIds: kColumn.cardIds ? kColumn.cardIds : "",
//   })
//   // ,
//   // columnOrder=['column-1', 'column-2', 'column-3', 'column-4'],

//   )

//   )
// );


//   constructor(props) {
//   super(props);
//   this.state = {
//   kColumns:props.kColumns,
//   task: initialData
//   };
// }   


export const getAllColumns =(createSelector(getkColumns))