import axios from 'axios';

const API = axios.create({ baseURL: 'https://zen-berlin.herokuapp.com' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const createGoogleAuth = (googleAcc) => API.post('/googleauth', googleAcc)

export const createReservation = (reservation) => API.post('/reservation', reservation)
export const deleteReservation = (id) => API.delete(`/reservation/${id}`);

export const createTestimonial = (testimonial) => API.post('/testimonial', testimonial)

export const createFeedback = (feedback) => API.post('/feedback', feedback)