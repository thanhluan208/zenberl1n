import * as actionType from "../constants/actionTypes";
// eslint-disable-next-line 
export default (reservations =[], action) => {
    switch (action.type) {
        case actionType.CREATE:
            return [ ...reservations, action.payload]
        case actionType.DELETE:
            return reservations.filter((reservation) => reservation._id !== action.payload);
        default:
            return reservations
    }
}