import { CREATE, DELETE } from "../constants/actionTypes";
import * as api from '../api/index'

export const createReservation = (reservation) => async (dispatch) => {
    try {
        const { data } = await api.createReservation(reservation)

        dispatch({ type: CREATE, payload: data})
    } catch (error) {
    }
}

export const deleteReservation = (id) => async (dispatch) => {
    try {
      await api.deleteReservation(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };