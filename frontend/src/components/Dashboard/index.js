import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png';
import './styles.css';

import UserModal from "./components/Modal";

export default function Dashboard(props){


    // Dashboard renderizado
    return(
        <div className="container">

        <div className="dashboard">
            <div className="photos-dashboard">
                <span className="logo" ><img src={logo} height="60px" width="210px" /> </span>

                <UserModal/>
            </div>

        <nav className="menu">
        <hr/>
            <div className="div">
                <Link className="nav-btn" to="/">Página Inicial</Link>
            </div>
            <div className="div">
                <Link className="nav-btn" to="/list/publication">Transparência</Link>
            </div>
            <div className="div">
                <Link className="nav-btn" to="/list/markets">Comerciantes</Link>
            </div>
            <div className="div">
                <Link className="nav-btn" to="/create/donation">Realizar Doação</Link>
            </div>
            <div className="div">
                <Link className="nav-btn" to="/products">Meus Produtos</Link>
            </div>
            <div className="div">
                <Link className="nav-btn" to="/create/publication">Nova Publicação</Link>
            </div>

        </nav>

        </div>

        <div className="body">
               {props.children}
        </div>

        </div>

    )
}
