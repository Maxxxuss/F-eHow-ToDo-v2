const kanbanBoardReducerDefaultState = [];

const kanbanBoardReducer = (state = kanbanBoardReducerDefaultState, action) => {
  switch (action.type) {
    case "START_KSTORY":
      return [...state, action.storie];
    // case "REMOVE_KSTORY":
    //   return state.filter(({ id }) => id !== action.id);

    // case "ADD_KSTORY":
    //   return state.map((storie) => {
    //     if (storie.aNoteId === action.id) {
    //       return {
    //         ...storie,
    //         stories: [
    //           ...storie.stories,
    //           {
    //             ...action.updates,
    //           },
    //         ],
    //       };
    //     } else {
    //       return storie;
    //     }
    //   });

     case "ADD_KSTORY":
      return [...state, action.updates];

    

      case "REMOVE_KSTORY":
        // return state.stories.filter(({ sId }) => sId !== action.sId);

        return state.map((storie) => {
          if (
            storie.stories.storieID === action.sId &&
            storie.aNoteId === action.aNid
          ) {
            return {
              ...action.sId = {}
            };
  
            // ],
            // };
          } else {
            return storie;
          }
        });

    case "EDIT_KSTORY":
      return state.map((storie) => {
        if (
          storie.stories.storieID === action.sID &&
          storie.aNoteId === action.aNid
        ) {
          return {
            ...storie,

            stories: [
              ...storie.stories,

              {

                ...action.updates,
              },
            ],
          };

          // ],
          // };
        } else {
          return storie;
        }
      });

    // return state.map((storie) => {
    //   if (
    //     storie.aNoteId === action.aNid

    //     // storie.stories.storieID === action.sID
    //   )

    //   {
    //     return {
    //       ...storie,
    //       stories: [{ ...action.updates }],
    //     };

    //     // ],
    //     // };
    //   } else {
    //     return storie;
    //   }
    // });
    // return state.map((storie) => {
    //   if (storie.aNoteId === action.aNid && storie.stories.storieID === action.sID ) {
    //     return {
    //       ...storie,
    //       stories: [
    //         ...storie.stories,
    //         {
    //           ...action.updates,
    //         },
    //       ],
    //     };
    //   } else {
    //     return storie;
    //   }
    // });

    // case "EDIT_KSTORY":
    //   return state.map(
    //     (storie) => {
    //       if (storie.aNoteId === action.aNid && storie.stories.storieID === action.sID) {
    //         return{
    //           ...storie,
    //           stories:[
    //             ...storie.stories,
    //           {
    //             ...action.updates
    //           }
    //           ]
    //         }

    //       }
    //     }

    // return state.map(
    //   (storie) => {
    //     if (storie.aNoteId === action.aNid) {
    //       storie.stories.map((uStory) => {
    //         if (uStory.sID === action.sId) {
    //           return {
    //             ...uStory,
    //             ...action.updates,
    //           };
    //         }
    //       });
    //     }
    //   }
    // else {
    //   return storie

    // }
    // }
    // );
    // return state.map((storie) => {
    //   if (storie.aNoteId === action.aNid) {
    //     return {
    //       ...storie,
    //       stories:[
    //         storie.stories.map((userStorie)=>{
    //           if(userStorie.storieID === action.sId) {
    //             return{
    //               ...storie.stories,
    //               ...action.updates
    //             }
    //             else{
    //               return userStorie
    //             }
    //           },
    //         })
    //       ],
    //     };
    //   } else {
    //     return storie;
    //   }
    // });

    // case "START_KSTORY":
    //   return state.map((storie) => {
    //     if (storie.id === action.id) {
    //       return {
    //         ...storie,
    //         kanbanboard: [
    //           ...storie.kanbanboard,
    //           {
    //             ...action.updates,
    //           },
    //         ],
    //       };
    //     } else {
    //       return storie;
    //     }
    //   });

    default:
      return state;
  }
};

export default kanbanBoardReducer;
