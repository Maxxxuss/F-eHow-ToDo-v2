//  const kColumnDefaultState = {
//   columns:  {
//    'column-1':  {
//     id: "BACK5e849c9e34ee93bc7255c599",
//     title: "Loggg",
//     taskIds: [],
//   }, 'column-2':  {
//     id: "TODO5e849c39325dc5ef58e5a5db",
//     title: "Todo",
//     taskIds: [],
//   }, 'column-3':  {
//     id: "PROG5e849c2b38d238c33e516755",
//     title: "Progress",
//     taskIds: [],
//   }, 'column-4':  {
//     id: "DONE5e849c2b38d238c33e5146755",
//     title: "Done",
//     taskIds: [],
//   }},
//   columnOrder: ['column-1', 'column-2', 'column-3', 'column-4']
// }
// ;

const kColumnDefaultState = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Backlog',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'To do',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'In progress',
      taskIds: [],
    },
      'column-4': {
        id: 'column-4',
        title: 'Done',
        taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

const kColumReducer = (state = kColumnDefaultState) =>
   { return state
}

export default kColumReducer
