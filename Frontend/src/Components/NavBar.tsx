import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faBook, faRectangleList, faRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../actions/logout';
import { useDispatch, useSelector } from "react-redux";

export const NavBar = () => {
    const isLogged = useSelector((state: { isLogged: boolean }) => state.isLogged);
    const dispatch = useDispatch();
    return (
        <>
            {isLogged ? (
                <Nav defaultActiveKey="/home" as="ul" className="bg-dark py-2 mb-5 nav-index">
                    <Nav.Item as="li">
                        {/* LINK PERMETTE DI CREARE IL SEGMENTO CHE PERMETTE DI AVERE PAGINE DIVERSE */}
                        <Link to="/form" className="nav-link text-nav">
                            <FontAwesomeIcon icon={faRectangleList} /> Inserimento
                        </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/lista-card" className="nav-link text-nav">
                            <FontAwesomeIcon icon={faBook} /> Libreria
                        </Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="ms-auto">
                        <Link to="/" onClick={() => dispatch(logout())} className="nav-link text-btn">
                            <FontAwesomeIcon className="margin-icon" icon={faRightFromBracket} />Logout
                        </Link>
                    </Nav.Item>
                </Nav>
            ) : <Nav defaultActiveKey="/home" as="ul" className="bg-dark py-2 mb-5 nav-index">
                <Nav.Item as="li" className="ms-auto">
                    <Link to="/" className="nav-link text-btn txt-btn-login">
                        <FontAwesomeIcon className="me-1 margin-icon" icon={faArrowRightToBracket} />Login
                    </Link>
                </Nav.Item>
            </Nav>}
        </>
    )
}