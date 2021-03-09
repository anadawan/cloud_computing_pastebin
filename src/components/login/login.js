/*index.jsx*/
import React from "react";
//Functional Component 
const LoginPage = () => {
    return (
        <div style={{
            width: "50%",
            margin: "0 auto",
            padding: "50px"
        }}>
            <form>
            <div class="form-outline mb-4">
                <label class="form-label" for="form1Example1">Email address  </label>
                <input type="email" id="form1Example1" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label" for="form1Example2">Password  </label>
                <input type="password" id="form1Example2" class="form-control" />
            </div>

            <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="form1Example3"
                            checked
                        />
                        <label class="form-check-label" for="form1Example3"> Remember me </label>
                    </div>
                </div>

                <div class="col">
                    <a href="#!">Forgot password?</a>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Sign in</button>
            </form>
        </div >
    );
};

export default LoginPage;