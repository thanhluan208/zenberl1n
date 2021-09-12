import * as actionType from "../constants/actionTypes";
// eslint-disable-next-line 
export default (feedback = [], action) => {
    switch (action.type) {
        case actionType.CREATE:
            return [ ...feedback, action.payload]
        
        default:
            return feedback
    }
}