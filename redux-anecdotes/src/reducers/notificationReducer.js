const initialNotification = ''

export const setNotification = (message, seconds) => {
  return dispatch => {
    dispatch({
      type: 'SET',
      data: message
    })
    setTimeout(() => {
      dispatch({
        type: 'REMOVE'
      })
    }, seconds * 1000)
  }
}

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'SET':
      return action.data
    case 'REMOVE':
      return ''
    default:
      return state
  }
}

export default notificationReducer