import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CrearEstaciones from './Estaciones/CrearEstaciones'
import Fab from '@material-ui/core/Fab';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MapView from './MapView';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Redirect } from "react-router-dom";
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import FormGroup from '@material-ui/core/FormGroup';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function MainView() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const open = Boolean(anchorEl);

  let history = useHistory();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const cerrarSesion = (event) =>{
    localStorage.setItem('user', '');
    history.push('/');
  }

  const closeModal = (event) =>{
    setModalOpen(false);  
  }

  if(localStorage.getItem('user') == ''){
    return <Redirect to='/Login' />;
  } 

  return (
    <div className="mainView">
      <AppBar className="bar" position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Estaciones de Gasolina - Tulua - 2021
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                <MenuItem onClick={cerrarSesion}>Cerrar Sesion</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>    

      <Grid container spacing={2} className ="fullView">
        <Grid item xs={7} className ="fullView">
          <Paper className ="fullView">
            <MapView />  
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <CrearEstaciones />  
        </Grid>
      </Grid>

    </div>

  );
}