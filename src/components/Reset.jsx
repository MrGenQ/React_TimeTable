import React, {useState, useEffect} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../services/AutServices";
import { Form, Button } from "react-bootstrap";
import {sendPasswordReset} from "../services/AutServices";
const Reset = () => {
    const [email, setEmail] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate();
    useEffect(()=> {
        if(loading) return;
    },[user, loading])
    const submitHandler = (e) =>{
        e.preventDefault()
        sendPasswordReset(email)
    }
    return(
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="El. pasto adresas"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Button type="submit" variant="primary">Reset</Button>
            </Form.Group>
        </Form>
    )
}
export default Reset