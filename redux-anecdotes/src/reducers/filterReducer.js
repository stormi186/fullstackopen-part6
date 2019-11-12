const initialFilter = ''

export const filterChange = (filter) => {
  return {
    type: 'FILTER',
    filter: filter.toLowerCase()
  }
}

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.filter
    default:
      return state
  }
}

export default filterReducer