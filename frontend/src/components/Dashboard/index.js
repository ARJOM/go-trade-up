import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import './styles.css'

export default function Dashboard(props){
    return(
        <div className="container">

        <div className="dashboard">
            <div className="photos-dashboard">
            <span className="logo" ><img src={logo} height="60px" width="210px" /> </span>
        
        <span><a className="useer"><img  className="user"  src="https://www.pngkit.com/png/detail/133-1338563_boys-wrestling-avatar-html.png" /></a></span>
            </div>
            
        <nav className="menu">
        <hr/>
            <div className="div">
                <a href="#" className="nav-btn">Página Inicial</a>
            </div>
            <div className="div">
                <a href="#" className="nav-btn">Transparência</a>
            </div>
            <div className="div">
                <a href="#" className="nav-btn">Comerciantes</a>
            </div>
            <div className="div">
                <a href="#" className="nav-btn">Realizar Doação</a>
            </div>
            <div className="div">
                <a href="#" className="nav-btn">Meus Produtos</a>
            </div>
            <div className="div">
                <a href="#" className="nav-btn">Nova Publicação</a>
            </div>
            
        </nav>
        
        </div>

        <div className="body">
               {props.children}
        </div>
        </div>

    )
}