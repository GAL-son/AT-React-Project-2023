import { useEffect, useRef, useState } from 'react';
import { registerUser } from '../api';
import '../css/login.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

    const [nameField, setNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [passwdField, setPasswdField] = useState("");
    const [repPasswdField, setRepPasswdField] = useState("");

    const [validUsername, setValidUsername] = useState(null);
    const [validEmail, setValidEmail] = useState(null);
    const [passwdValid, setPasswdValid] = useState(null);
    const [passwdMatch, setPasswdMatch] = useState(null);

    const formValid = useRef([false, false, false, false]);
    const [formValidClass, setFormValidClass] = useState(false)

    const [errors, setErrors] = useState("")

    useEffect(() => {
        const valid = (nameField.length != 0)
        setValidUsername(valid)
        updateFormValid(0, resolveNull(valid, false));
    }, [nameField])

    useEffect(() => {
        const validRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        const valid = RegExp(validRegex).test(emailField) 
        // console.log(valid)
        setValidEmail(valid)
        updateFormValid(1, resolveNull(valid, false));
    }, [emailField])

    useEffect(() => {
        const valid = passwdField.length !== 0
        setPasswdValid(valid);
        updateFormValid(2, resolveNull(valid, false));
    }, [passwdField])

    useEffect(() => {
        const valid = passwdValid && (passwdField == repPasswdField)
        setPasswdMatch(valid);
        updateFormValid(3, resolveNull(valid, false));
    }, [passwdField, repPasswdField])

    const updateFormValid = (index, value) => {
        if(index >= formValid.current.length) {
            return;
        }

        formValid.current[index] = value;
        checkFormValid()
    }

    const checkFormValid = () => {
        let valid = true;
        formValid.current.forEach(val => {
            valid = !!val
        });

        console.log(formValidClass, valid, formValid.current)
        
        setFormValidClass(valid);
    }

    const resolveNull = (val, def) => {
        if(val === null || typeof(val) !== typeof(def)) {
            return def;
        } else {
            return val;
        }
    }

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

    const handleSendForm = async () => {
        if(!formValidClass) {
            // CAN SHOW PROPMT
            return;
        } else {
            registerUser(nameField, emailField, passwdField)
                .then(res => {
                    console.log(res);
                    navigate("/signin");                
                })
                .catch(err => {
                    const errorMessages = {};
                    errorMessages.auth = err.response.data;
                    setErrors(errorMessages.auth || {});
                })
        }
    }    

    return (
        <div id='content' className='container-fluid d-flex flex-column align-items-center'>
            <div className='d-flex flex-column align-items-center' id="login-card">
                <h2>Register</h2>
                <form action="">
                <div className="mb-3">
                    {(errors != "") && 
                    <div className='mb-3 alert alert-danger'>
                        Error occurred! - {errors}
                    </div>}
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className={"form-control "+validateField(validUsername)} id="InputUsername" aria-describedby="emailHelp" value={nameField} onChange={e => {setNameField(e.target.value); }}/>
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
                    <button type="submit" className={"btn btn-success rounded-pill " + ((!formValidClass) ? "disabled" : "")} onClick={handleSendForm}> Create account and login</button>
                </div>
                </form>
            </div>

        </div>
    )
}

export default Register;