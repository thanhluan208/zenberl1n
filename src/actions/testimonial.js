import { CREATE } from "../constants/actionTypes";
import * as api from '../api/index'

export const createTestimonial = (testimonial) => async (dispatch) => {
    try {
        const { data } = await api.createTestimonial(testimonial)

        dispatch({ type: CREATE, payload: data})
    } catch (error) {
    }
}

