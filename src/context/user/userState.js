import UserContext from "./userContext";
import config from "../../configs/config";
import { useState } from "react";

const UserState = (props) => {

    const [isUserLoggedInState, setIsUserLoggedInState] = useState(false);

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
                console.log('failed to login');
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
                console.log('failed to signup');
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

    return (
        <UserContext.Provider value={{ isUserLoggedInState, setIsUserLoggedInState, isUserLoggedIn, loginUser, signupUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;