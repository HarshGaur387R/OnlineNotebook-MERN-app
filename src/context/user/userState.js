import UserContext from "./userContext";
import config from "../../configs/config";
import { useState } from "react";

const UserState = (props) => {

    const [isUserLoggedInState, setIsUserLoggedInState] = useState(false);
    const [userData, updateUserData] = useState({});


    const isUserLoggedIn = async () => {

        const tokenInStorage = localStorage.getItem('token')
        if (!tokenInStorage) return false;

        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + tokenInStorage }
        }

        try {
            const responseJSON = await fetch(`${config.HOST_URL}/api/v1/user/my-data`, requestOptions);
            const responseDATA = await responseJSON.json();

            if (typeof responseDATA.success !== 'boolean') return false;

            updateUserData(responseDATA.data)
            return responseDATA.success;

        } catch (error) {
            console.error(error);
            return false;
        }
    }

    const loginUser = async (email, password) => {

        const payload = { email, password };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }

        try {
            const responseJSON = await fetch(`${config.HOST_URL}/api/v1/auth/login`, requestOptions);
            const responseDATA = await responseJSON.json();

            if (!responseDATA.success) {
                alert('failed to login');
                console.error('failed to login');
                return;
            }
            localStorage.setItem('token', responseDATA.authToken);
            setIsUserLoggedInState(true)
            return

        } catch (error) {
            alert('failed to login');
            console.error(error);
            return;
        }
    }

    const signupUser = async (name, email, password) => {

        const payload = { name, email, password };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }

        try {
            const responseJSON = await fetch(`${config.HOST_URL}/api/v1/auth/signup`, requestOptions);
            const responseDATA = await responseJSON.json();

            if (!responseDATA.success) {
                alert('failed to signup');
                console.error('failed to signup');
                return;
            }
            localStorage.setItem('token', responseDATA.authToken);
            setIsUserLoggedInState(true)
            return;

        } catch (error) {
            alert('failed to signup');
            console.error(error);
            return;
        }
    }

    const updateUser = async (name, email, password) => {

        const payload = { name, email, password };
        const tokenInStorage = localStorage.getItem('token');

        if (!tokenInStorage) {
            alert('Please Login again');
            setIsUserLoggedInState(false);
            return;
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' ,'Authorization': 'Bearer ' + tokenInStorage},
            body: JSON.stringify(payload)
        }

        try {
            const responseJSON = await fetch(`${config.HOST_URL}/api/v1/user/update`, requestOptions);
            const responseDATA = await responseJSON.json();

            if (!responseDATA.success) {
                alert('failed to update');
                console.error('failed to update : response success is false');
                return;
            }

            updateUserData(responseDATA.data);
            setIsUserLoggedInState(true);
            alert('User updated successfully!');
            return;

        } catch (error) {
            alert('error caught: failed to update');
            console.error(error);
            return;
        }
    }

    const logoutUser = () => {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
        }
        alert('Logout successfully');

        window.location.href = '/';
    }

    return (
        <UserContext.Provider value={{ isUserLoggedInState, userData, setIsUserLoggedInState, isUserLoggedIn, loginUser, signupUser, logoutUser, updateUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;