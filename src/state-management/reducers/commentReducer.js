export default function commentReducer(state, action) {
  let comment
  switch(action.type) {
    case 'NEW_COMMENT':
      console.log('DISPATCHING')
      state.comments = [...state.comments, action.comment]

      return {...state}
    case 'UPDATE_COMMENT':
      comment = state.comments.find((el) => el.id === action.comment.id)
      comment.likes = action.comment.likes
      comment.dislikes = action.comment.dislikes

      return {...state}
    case 'DELETE':
      console.log('prostie' , action)
      state.comments = state.comments.filter(el => el.id !== action.id)
      
      return {...state}
    case 'GET_COMMENTS':
      state.comments = action.comments

      return {...state}
    default:

      return {...state}
  }
}
