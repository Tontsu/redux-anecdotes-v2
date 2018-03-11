const initialState = ['Notification']

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return 'New notification'
    case 'VOTE_NOTIFICATION':
      return 'you voted ´' + action.content + '´'
    default:
      return state
  }
}

export const voteNotification = (anecdote) => {
  return {
    type: 'VOTE_NOTIFICATION',
    anecdote
  }
}

export default notificationReducer
