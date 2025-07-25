import glogo from "./assets/glogo.svg";

const App = () => {
    return (
        <div className="login-container">
            <form method="post" action="https://httpbin.org/post">
                <div className="login-head">
                    <h2>login</h2>
                    <p>Don't have an account? <a href="">sign-up</a></p>
                </div>

                <div className="login-entry">
                    <input type="text" placeholder="enter username" /><br />
                    <input type="password" placeholder="enter password" /><br />
                    <a href="">forgot password</a>
                </div>

                <div className="login-button">
                    <button className="btn" type="submit">Login &#x2192;</button>
                </div>

                <div className="web-logo">
                    <a href=""><img src={glogo} alt="google" /></a>

                </div>
            </form>

        </div>
    )
}

export default App