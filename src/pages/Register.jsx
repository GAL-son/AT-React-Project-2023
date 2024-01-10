import { useEffect, useState } from 'react';
import '../css/login.css'

const Register = () => {

    const [nameField, setNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [passwdField, setPasswdField] = useState("");
    const [repPasswdField, setRepPasswdField] = useState("");

    const [validUsername, setValidUsername] = useState(null);
    const [validEmail, setValidEmail] = useState(null);
    const [passwdValid, setPasswdValid] = useState(null)
    const [passwdMatch, setPasswdMatch] = useState(null)

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        console.log(nameField)
        console.log()
        setValidUsername(nameField.length != 0)
    }, [nameField])

    useEffect(() => {
        const validRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

        setValidEmail(RegExp(validRegex).test(emailField))
    }, [emailField])

    useEffect(() => {
        console.log(passwdField)
        setPasswdValid(passwdField.length != 0)
    }, [passwdField])

    useEffect(() => {
        setPasswdMatch(passwdValid && passwdField == repPasswdField)
    }, [repPasswdField])

    useEffect(() => {
        console.log(validUsername && validEmail && passwdValid && passwdMatch)
        setFormValid(validUsername && validEmail && passwdValid && passwdMatch)
    }, [nameField, emailField, passwdField, repPasswdField])



    const validateField = (isValid) => {
        if(isValid == null) {
            return ""
        }
        if (isValid){
            return "is-valid"
        } else {
            return "is-invalid"
        }
    }

    

    return (
        <div id='content' className='container-fluid d-flex flex-column align-items-center'>
            <div className='d-flex flex-column align-items-center' id="login-card">
                <h2>Register</h2>
                <form action="">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="email" className={"form-control "+validateField(validUsername)} id="exampleInputEmail1" aria-describedby="emailHelp" value={nameField} onChange={e => {setNameField(e.target.value); }}/>
                    <div class="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className={"form-control "+ validateField(validEmail)} id="exampleInputEmail1" aria-describedby="emailHelp" value={emailField} onChange={e => {setEmailField(e.target.value); }}/>
                    <div class="invalid-feedback">
                        Please enter valid email.
                    </div>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={passwdField} onChange={e => {setPasswdField(e.target.value)}} id="exampleInputPassword1"/>
                    <div class="invalid-feedback">
                        Please entar a password.
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Repeat password</label>
                    <input type="password" className={"form-control " + validateField(passwdMatch)} value={repPasswdField} onChange={e => {setRepPasswdField(e.target.value)}}  id="exampleInputPassword2"/>
                    <div class="invalid-feedback">
                        Passwords don't match.
                    </div>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <div className='d-flex justify-content-center'>
                    <button type="submit" className={"btn btn-success btn-lg rounded-pill " + ((!formValid) ? "disabled" : "")} ena> Create account and login</button>
                </div>
                </form>
            </div>

        </div>
    )
}

export default Register;