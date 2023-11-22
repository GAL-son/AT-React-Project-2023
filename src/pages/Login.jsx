import '../css/login.css'

const Login = () => {
    return (
        <div id='content' className='container-fluid d-flex flex-column align-items-center'>
            <div className='d-flex flex-column align-items-center' id="login-card">
                <h2>Login</h2>
                <form action="">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type='button' className='btn rounded-pill'>I dont have an account...</button>
                <button type="submit" className="btn btn-primary rounded-pill">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Login;