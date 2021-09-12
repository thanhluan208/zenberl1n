import * as actionType from '../constants/actionTypes'
// eslint-disable-next-line 
export default (googleAcc = [], action) => {
    switch (action.type) {
        case actionType.GOOGLEAUTH:
            return [ ...googleAcc, action.payload]
        default:
            return googleAcc
    }
}