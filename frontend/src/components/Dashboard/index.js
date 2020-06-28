import React, {useEffect, useState} from 'react';
import logo from '../../assets/logo.png';
import './styles.css'

import {isAuthenticated} from "../../utils/auth";

import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      modal2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: 500,
      height: 200,
      backgroundColor: "#003e72",
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: 60,
      margin: 30,
    },
}));

export default function Dashboard(props){
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [body, setBody] = useState();

    useEffect(() => {
        if(isAuthenticated()){
            setBody(loged)
        } else {
            setBody(anonymous)
        }
    }, []);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const loged = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="title"> Entre em GoTradeUp com seus dados</h2>
            <section className="modal-form">

                <section class="buttons">

                    <button className="btn-cancel">
                        Sair
                    </button>

                    <button className="btn-concluir">
                        <a href=""> Minha Conta </a>
                    </button>
                </section>
            </section>
        </div>
    );

    const anonymous = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="title"> Entre em GoTradeUp com seus dados</h2>
        <h4 id="form-body">
            *Todos os campos deste formulário são obrigatórios!
        </h4>
        <section className="modal-form">
                <form type="submit">
                    <section className="inputs">
                        <label for="User-or-email">
                            <p>Nome de usuário ou E-mail:</p>
                            <input type="text" className="nbreak" className="req" placeholder="User / email" value="" />
                        </label>

                        <label for="Senha">
                            <p>Senha:</p>
                            <input type="text" className="nbreak" className="req" placeholder="Senha" value=""/>
                        </label>

                    </section>

                    <section class="buttons">

                        <button onClick={handleClose} className="btn-cancel">
                            Cancelar
                        </button>

                        <button type="submit" className="btn-concluir">
                            Entrar
                        </button>
                    </section>
                </form>
            </section>
      </div>
    );

    return(
        <div className="container">

        <div className="dashboard">
            <div className="photos-dashboard">
                <span className="logo" ><img src={logo} height="60px" width="210px" /> </span>

                <span onClick={handleOpen}><img  className="user"  src="https://www.pngkit.com/png/detail/133-1338563_boys-wrestling-avatar-html.png" /></span>

                <Modal
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="title"
                    aria-describedby="form-body"
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                >
                <Fade in={open}>
                    {body}
                </Fade>

                </Modal>

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
