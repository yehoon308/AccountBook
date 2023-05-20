import React from "react";
import SignIn from "../components/signIn";
import Button from "react-bootstrap/Button";

function Login(props) {
    console.log('tets')
    return (
        <div style={{ display: "flex", height: "80vh" }}>
            <SignIn />
            <Button onClick={() => console.log("Click")} />
        </div>
    );
}

export default Login;
