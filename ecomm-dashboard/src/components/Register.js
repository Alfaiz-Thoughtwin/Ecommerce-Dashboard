import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();

    const signUp = async () => {
        let item = {name, password, email};
        localStorage.setItem("User-Info", JSON.stringify(item));
        history.push("/add");
    }

    return (
        <>
          <div className="container col-sm-6 offset-sm-3 border p-4 my-2">
            <h1>User Sign Up Page</h1><br />
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" />
              <br />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Password" />
              <br />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email" />
              <br />
              <Button type="submit" onClick={signUp}>Register</Button>
          </div>
        </>
    )
}

export default Register
