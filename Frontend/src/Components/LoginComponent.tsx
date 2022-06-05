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

        //

        let credenziali = {
            email: email,
            password: passw
        }

        axios.post("http://localhost:4000/login", credenziali).then((risultato) => {
            if(risultato.data.status && risultato.data.status == "success"){
                dispatch(login());
                console.log("si")
            }
        });
    }

    return (
        <Row>
            <Col>
                <form onSubmit={funzioneInserimento}>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" id="inputEmail" placeholder="Inserisci il valore" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" id="inputPassword" placeholder="Inserisci il valore" />
                    </Form.Group>

                    <button type="submit" className="btn btn-primary mt-3">Inserisci</button>

                </form>
            </Col>
        </Row>
    )
}