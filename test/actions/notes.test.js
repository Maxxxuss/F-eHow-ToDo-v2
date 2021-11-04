import { addExpense , removeExpense, editExpense, changeStatus } from "../../src/actions/notes";

test("ACTION - Remove Note", ()=> {
    const action = removeExpense({id:"idNumber1231"})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE', 
        id:"idNumber1231" 
    })
})

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });