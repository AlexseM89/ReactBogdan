import React from "react";
import { useState } from "react";
function Login() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [data, setData] = useState({ username: "", password: "" });
    function nandleFormSubmit(event) {
        event.preventDefault();

        console.log(data);
        alert(JSON.stringify(data));
    }
    function handleImputChange(e, name) {
        setData({ ...data, [name]: e.target.value });
    }
    return (
        <React.Fragment>
            <h1>Login Form</h1>
            <form onSubmit={nandleFormSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={data.username}
                        onChange={(e) => handleImputChange(e, "username")}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => handleImputChange(e, "password")}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </React.Fragment>
    );
}
export default Login;
