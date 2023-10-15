export function queryReducer(state: any, action: any) {
  switch (action.type) {
    case 'search': {
      return { query: action.query,data:action.data };
    }
    case 'pagination': {
      return { ...state,data:action.data, currentPage:action.currentPage };
    }
   
    default: {
      throw new Error('Unknown action: ' + action.type);
    }
  }
}