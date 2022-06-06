import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, Loading, error] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };
    if (user) {
        navigate("/orders");
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title"> Login </h2>
                <form action="" onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label html for="email">
                            Email
                        </label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="Password" id="password" />
                    </div>
                    <p style={{ color: "red" }}> {error?.message}</p>
                    {Loading && <p>Loading...</p>}
                    <input className="form-submit" type="submit" value="Login" />
                </form>
                <p>
                    New to Amazon ?{" "}
                    <Link className="form-link" to="/signUp">
                        {" "}
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
