// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
// import { useNavigate } from "react-router";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordBlur = (event) => {
        setConfirmPass(event.target.value);
    };
    if (user) {
        navigate("/shop");
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPass) {
            setError("passwords doesn't match ");
            return;
        }
        // if (password.length > 6) {
        //     setError("Password must be 6 charecter or longer");
        //     return;
        // }

        createUserWithEmailAndPassword(email, password);
    };

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title"> Sign Up</h2>
                <form action="" onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label html for="email">
                            Email
                        </label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="Password" required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Confirm password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="Confirm Password" required id="" />
                    </div>
                    <p style={{ color: " red" }}>{error}</p>
                    <input className="form-submit" type="submit" value="Sign Up" />
                </form>
                <p>
                    Have an Account Already ?
                    <Link className="form-link" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
