import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../../redux/features/signUpReducer";

const SignUp = () => {

    const error = useSelector(state => state.signUp.error)

    const [newUser, setNewUser] = useState({pets:[]});

    const dispatch = useDispatch()

    const handleNewUser = {
        login: (login) => {
            setNewUser({...newUser, login})
        },
        password: (password) => {
            setNewUser({...newUser, password})
        },
        firstName: (firstName) => {
            setNewUser({...newUser, firstName})
        },
        lastName: (lastName) => {
            setNewUser({...newUser, lastName})
        },
        mail: (mail) => {
            setNewUser({...newUser, mail})
        },
        phone: (phone) => {
            setNewUser({...newUser, phone})
        },
    }

    const handleSabmit = () => {
        dispatch(createUser(newUser))
    }
//<input onChange={(e)=> handleNewUser.login(e.target.value)} value={newUser.login}/>
    return (

    );
};

export default SignUp;