let maxId = 2;

export const add_user = (firstname, lastname, email) => {
  return{
    type:'ADD_ITEM',
    id: ++maxId,
    firstname, 
    lastname, 
    email
  }
}

export const delete_user = (id) => {
  return{
    type: 'DELETE_ITEM',
    id
  }
}

export const logIn = (logged) => {
  return{
    type: 'LOG_IN',
    payload: logged
  }
}