import ACTIONS from './Actions'

//this function give the component a alert if the component is notify or auth
const reducers = (state, action) => {
    switch(action.type){
        case ACTIONS.NOTIFY:
            return{
                ...state,
                notify: action.payload
            };
            case ACTIONS.AUTH:
                return{
                    ...state,
                    auth: action.payload
                };
            default:
                return state;
    }
}

export default reducers