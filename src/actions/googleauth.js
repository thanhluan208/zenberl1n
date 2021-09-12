import {GOOGLEAUTH} from '../constants/actionTypes'
import * as api from '../api'

export const createGoogleAuth = (googleAcc) => async (dispatch) => {
    try {
        const { data } = await api.createGoogleAuth(googleAcc)
  
        dispatch({ type: GOOGLEAUTH, payload:data})
    } catch (error) {
    }
  }