import { combineReducers } from "redux";

import authReducer from "./auth";
import googleauth from './googleauth'
import reservation from './reservation'
import testimonial from "./testimonial";

export const reducers = combineReducers({ authReducer, googleauth, reservation, testimonial })