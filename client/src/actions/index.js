import axios from 'axios';
import { CHANGE_TITLE, FETCH_USER } from './types';

export const titleDispatch = () => dispatch => {
  return {
    changeTitle: (title) => dispatch({type: CHANGE_TITLE, title: title})
  }
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({type: FETCH_USER, payload: res.data});
}