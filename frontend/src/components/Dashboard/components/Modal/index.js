import React, {useState} from "react";
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'
import './style.css'

import Login from "../Login";
import {isAuthenticated} from "../../../../utils/auth";

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

export default function UserModal() {
    // Modasl states
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    // Handles modal
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (isAuthenticated()){
        return (
            <React.Fragment>
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
                    <div style={modalStyle} className={classes.paper}>
                        <h2 className="title"> Entre e</h2>
                        <section className="modal-form">

                            <section className="buttons">

                                <button className="btn-cancel" onClick={() => localStorage.removeItem('token')}>
                                    Sair
                                </button>

                                <button className="btn-concluir">
                                    <a href=""> Minha Conta </a>
                                </button>
                            </section>
                        </section>
                    </div>
                </Fade>

                </Modal>

            </React.Fragment>
            )
    }


    return(
        <React.Fragment>
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
                    <div style={modalStyle} className={classes.paper}>
                        <div  className="back">

                        <h2 className="titlle"> Entre em GoTradeUp </h2>
                        <h4 className="autentication">
                            *Todos os campos deste formulário são obrigatórios!
                        </h4>
                        <section>
                            <Login/>
                        </section>
                        </div>
                    </div>
                </Fade>

            </Modal>

        </React.Fragment>
    )


}
