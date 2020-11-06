import {SET_ALERT,REMOVE_ALERT} from '../actions/types';
import { v1 as uuidv1 } from 'uuid';

export const setAlert=(msg,alertType) =>dispatch=>{
    const id=uuidv1();
    dispatch({
        type: SET_ALERT,
        payload:{msg,alertType,id}
    });

    setTimeout(()=>dispatch({type:REMOVE_ALERT,payload:id}),3000);
};