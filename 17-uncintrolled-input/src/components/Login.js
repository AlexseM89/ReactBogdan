import React from "react";
function Login() {
    function nandleFormSubmit(event) {
        event.preventDefault();
        const userDate = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        console.log(userDate);
        alert(JSON.stringify(userDate));
    }
    return (
        <React.Fragment>
            <h1>Login Form</h1>
            <form onSubmit={nandleFormSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </React.Fragment>
    );
}
export default Login;
