import * as actionType from "../constants/actionTypes";
// eslint-disable-next-line 
export default (testimonial = [], action) => {
    switch (action.type) {
        case actionType.CREATE:
            return [ ...testimonial, action.payload]
        
        default:
            return testimonial
    }
}