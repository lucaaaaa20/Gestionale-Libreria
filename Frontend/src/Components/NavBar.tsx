import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faBook, faRectangleList } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
    return (
        <>
            <Nav defaultActiveKey="/home" as="ul" className="bg-dark py-2 mb-5 nav-index">
                <Nav.Item as="li">
                    {/* LINK PERMETTE DI CREARE IL SEGMENTO CHE PERMETTE DI AVERE PAGINE DIVERSE */}
                    <Link to="/form" className="nav-link text-nav">
                        <FontAwesomeIcon icon={faRectangleList}/> Inserimento
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/lista-card" className="nav-link text-nav">
                        <FontAwesomeIcon icon={faBook} /> Libreria
                    </Link>
                </Nav.Item>
            </Nav>
        </>
    )
}