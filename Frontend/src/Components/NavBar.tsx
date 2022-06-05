import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faBook, faRectangleList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../actions/logout';
import { useDispatch } from "react-redux";

export const NavBar = () => {
    const dispatch = useDispatch();
    return (
        <>
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
                        <FontAwesomeIcon icon={faRightFromBracket} />Logout
                    </Link>
                </Nav.Item>
            </Nav>
        </>
    )
}