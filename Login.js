import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth)=>{
            history.push('/');
        })
        .catch(error=>alert(error.message))
    }
    const register = e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            //it successfully created a new user...
            console.log(auth);
            if (auth){
                history.push('/');
            }
        })
        .catch(error=>alert(error.message))
    
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>
            <div className='login_container'>
                <h1>SignIn</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>
                    <button type='submit' className='login_signinButton' onClick={signIn}>Sign In</button>
                </form>
                <p>By signing-in you agree to <strong>Amazon's Clone</strong> Conditions of Use & Sale. Please see our privacy notice, our cookies notice and our interest based ADs notice.</p>
                <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
