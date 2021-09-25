import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {createBrowserHistory} from "history";
import peopleReducer from "./people";

const initial = {
}


export const history = createBrowserHistory();

export function appReducer (state = initial, action) {
    switch (action.type) {
        case 'BLOG_LOADED':
            return {
                ...state, blog: action.payload
            }
        default:
            return state
    }

} 
const rootReducer = combineReducers({
    app: appReducer,
    people: peopleReducer,
    router: connectRouter(history),
})

export default rootReducer;