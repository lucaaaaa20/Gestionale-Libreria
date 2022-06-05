import axios from "axios";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../actions/login";

export const LoginComponent = () => {
    const dispatch = useDispatch();
    const funzioneInserimento = (evt: any) => {
        evt.preventDefault();
        let email = evt.target.inputEmail.value;
        let passw = evt.target.inputPassword.value;
        
        let credenziali = {
            email: email,
            password: passw
        }
        axios.post("http://localhost:4000/login", credenziali).then((risultato) => {
            if(risultato.data.status && risultato.data.status == "success"){
                dispatch(login());
            }
        });
    }
    
    return (
        <Row>
            <Col className="col-lg-3"></Col>
            <Col className="col-lg-6 text-white">
                <form className="form-aggiunta p-4 mb-5" onSubmit={funzioneInserimento}>
                    <Form.Group>
                        <Form.Label className="mt-2">Email</Form.Label>
                        <Form.Control type="text" id="inputEmail" placeholder="Inserisci il valore" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mt-2">Password</Form.Label>
                        <Form.Control type="password" id="inputPassword" placeholder="Inserisci il valore" />
                    </Form.Group>
                    <button type="submit" className="mt-4 btn btn-form mb-3 px-5 btn-block invio text-white">Inserisci</button>
                </form>
            </Col>
        </Row>
    )
}