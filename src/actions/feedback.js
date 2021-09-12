import { CREATE } from "../constants/actionTypes";
import * as api from '../api/index'

export const createFeedback = (feedback) => async (dispatch) => {
    try {
        const { data } = await api.createFeedback(feedback)

        dispatch({ type: CREATE, payload: data})
    } catch (error) {
    }
}

