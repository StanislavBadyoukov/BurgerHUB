const initialState =
  [{
    id: 1,
    email: 'admin@mail.ru',
    firstname: 'Admin',
    lastname: 'Admin',
  }, 
  {
    id: 2,
    email: 'stan@mail.ru',
    firstname: 'Stan',
    lastname: 'Nuts'
  }]


const tab_reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, {
        id: action.id,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email
      }]
    case 'DELETE_ITEM':
      return state.filter((user) => user.id !== action.id)
    default:
      return state;
  }
}



export { tab_reducer };