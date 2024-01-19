import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import '../css/login.css'
import { authUser } from '../api';

const Login = () => {
    const navigate = useNavigate()
    const [loginField, setLoginField] = useState("");
    const [passwdField, setPasswdField] = useState("");
    // const [validLogin, setValidLogin] = useState(null);
    // const [passwdValid, setPasswdValid] = useState(null);

    const formValid = useRef([false, false]);
    const [formValidClass, setFormValidClass] = useState(false)

    const [errors, setErrors] = useState("")

    useEffect(() => {
        const valid = (loginField.length !== 0)
        // setValidLogin(valid)
        updateFormValid(0, resolveNull(valid, false));
    }, [loginField])


    useEffect(() => {
        const valid = passwdField.length !== 0
        // setPasswdValid(valid);
        updateFormValid(1, resolveNull(valid, false));
    }, [passwdField])

    
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

    const handleLogin = async (e) => {
        e.preventDefault()
        if(!formValidClass) {
            return;
        } else {
            await  authUser(loginField, passwdField)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.token);
                navigate("/")
                window.location.reload();
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
                <h2>Email</h2>
                <form action="">
                {(errors !== "") && 
                    <div className='mb-3 alert alert-danger'>
                        Error occurred! - <span>{errors}</span>
                    </div>}
                    
                <div className="mb-3">
                    <label for="InputEmail" className="form-label">Login</label>
                    <input type="text" className={"form-control "+ validateField()} id="InputEmail" aria-describedby="loginhelp" value={loginField} onChange={e=> {setLoginField(e.target.value)}}/>
                    <div class="invalid-feedback">
                        Please enter login.
                    </div>
                </div>
                <div className="mb-3">
                    <label for="InputPassword" className="form-label">Password</label>
                    <input type="password" className={"form-control "+ validateField(passwdField)} id="InputPassword" value={passwdField} onChange={e => {setPasswdField(e.target.value)}}/><div class="invalid-feedback">
                        Please enter password.
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <Link to='../signup' type='button' className='btn rounded-pill'>I dont have an account...</Link>
                    <button type="submit" onClick={handleLogin} className={"btn btn-success rounded-pill " + ((!formValidClass) ? "disabled" : "")}>Login</button>
                </div>
                </form>
            </div>

        </div>
    )
}

export default Login;