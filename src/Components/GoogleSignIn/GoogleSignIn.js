import React from 'react';
import './GoogleSignIn.css'
import googleIcon from './Group 573.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fireBaseConfig';
import { useContext } from 'react';
import { BookCotext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const GoogleSignIn = () => {

    const { value, value2 } = useContext(BookCotext)
    const [loogedIdUser, setLoggedInUser] = value;
    const location = useLocation()
    const history = useHistory()
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser)
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                console.log(errorCode, errorMessage, email)
            });
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center my-5">Sing In Using Google</h1>
                <div className="google-sign-in">
                    <div onClick={handleGoogleSignIn} className="sign-in-button">
                        <div className="sing-in-button-img">
                            <img src={googleIcon} alt="" />
                        </div>
                        <div className="sing-in-button-text">
                            <h5>Continue with Google</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleSignIn;