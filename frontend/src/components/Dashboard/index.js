import React, {useState} from 'react';
import logo from '../../assets/logo.png';
import './styles.css'
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
 
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
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function Dashboard(props){
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </div>
    );

    return(
        <div className="container">

        <div className="dashboard">
            <div className="photos-dashboard">
                <span className="logo" ><img src={logo} height="60px" width="210px" /> </span>
        
                <span onClick={handleOpen}><img  className="user"  src="https://www.pngkit.com/png/detail/133-1338563_boys-wrestling-avatar-html.png" /></span>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
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