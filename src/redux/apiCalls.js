import { updateStart, updateSuccess, updateError, logOut } from './userSlice';
import axios from 'axios';

export const updateUser = async (user, dispatch) => {
    //  1st when we click on update button , dispatch updateStart action
    dispatch(updateStart());

    try {
        const res = await axios.post("http://localhost:5000/api/user/update/4514564654", user);
        console.log(res.data);
        dispatch(updateSuccess(res.data));
    } catch (err) {
        console.log(err);
        dispatch(updateError());
    }
}

export const logout = async(dispatch)=>{
    dispatch(logOut());
    // clear local storage user
    console.log("user logged out");
}