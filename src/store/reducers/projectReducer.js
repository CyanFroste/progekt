const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {

    case 'CREATE_PROJECT': console.log('created project', action.project); return state;

    case 'CREATE_PROJECT_ERROR': console.log(action.err); return state;

    case 'EDIT_PROJECT': console.log('project modified', action.project); return state;

    case 'EDIT_PROJECT_ERROR': console.log(action.err); return state;

    case 'DELETE_PROJECT': console.log('project deleted'); return state;

    case 'DELETE_PROJECT_ERROR': console.log(action.err); return state;

    default: return state;
  }
};

export default projectReducer;