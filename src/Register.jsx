
import React, { useState} from "react";


export const Register = (props) => {

        const[name, setName] = useState("");
        const[email, setEmail] = useState("");
        const[password, setPassword] = useState("");
    
        const handleSubmit = (e) => {
            e.preventDefaulgt();
            console.log(email);
        }
    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" id="name" placeholder="full name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
 
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                <button type="submit">Log In</button>

            </form>
            <button onClick={() => props.onFormSwitch("login")} >Already have an account? Login here.</button>
        </div>
    )
}