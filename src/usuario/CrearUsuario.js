import React, {Component} from 'react';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const classes = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {    
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class CrearUsuario extends Component{

  constructor(props) {
    super(props)
    this.nombre = React.createRef();
    this.state = {
      nombre: '',
      numero_documento: '',
      tipo_documento: '',
      sexo: '',
      nacionalidad: '',
      telefono: '',
      direccion_residencia: '',
      contrasena: '',
    }
  }

  async crearUsuario(event){    
    event.preventDefault();
    try{
      /*
      let result = await fetch('http://localhost:3000/user', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json'
        },
        body: JSON.stringify({
          "nombre": "prueba",
          "numero_documento": 8839273,
          "tipo_documento": "prueba",
          "sexo": "prueba",
          "nacionalidad": "prueba",
          "telefono": 9732,
          "direccion_residencia": "prueba",
          "contrasena": "passHash"
        })  
      });
      console.log(result);
      */
      const body = {
          "nombre": "prueba",
          "numero_documento": 8839273,
          "tipo_documento": "prueba",
          "sexo": "prueba",
          "nacionalidad": "prueba",
          "telefono": 9732,
          "direccion_residencia": "prueba",
          "contrasena": "passHash"
      };

      axios.post('http://localhost:3000/user', body)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
      
    }catch(e){
      console.log(e);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]:event.target.value
    })
  };

  render(){
    console.log(localStorage.getItem('user'));
    const {classes} = this.props;
    return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crear Usuario
          </Typography>


          <form className={classes.form} onSubmit = {(e)=>this.crearUsuario(e)}>
            <Grid container spacing={2}>


              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  //required
                  fullWidth
                  id="nombre"
                  name="nombre"
                  autoComplete="nombre"
                  label="Nombre"
                  ref={this.nombre}
                  onChange={(e) => {this.handleChange(e)}}/>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField                  
                  variant="outlined"
                  //required
                  fullWidth
                  autoFocus
                  id="numero_documento"
                  name="numero_documento"
                  autoComplete="numero_documento"
                  label="Numero de Documento"
                  onChange={(e) => {this.handleChange(e)}}/>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel>Tipo de Documento</InputLabel>
                  <Select
                    id="tipo_documento"
                    name="tipo_documento"
                    value={this.state.tipo_documento}
                    onChange={(e) => {this.handleChange(e)}}>
                    <MenuItem value={'CC'}>CC</MenuItem>
                    <MenuItem value={'NIT'}>NIT</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel>Sexo</InputLabel>
                  <Select
                    id="sexo"
                    name="sexo"
                    value={this.state.sexo}
                    onChange={(e) => {this.handleChange(e)}}>
                    <MenuItem value={'M'}>Masculino</MenuItem>
                    <MenuItem value={'F'}>Femenino</MenuItem>
                    <MenuItem value={'O'}>Prefiero no decirlo</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  //required
                  fullWidth
                  id="nacionalidad"
                  label="Nacionalidad"
                  name="nacionalidad"
                  value={this.state.nacionalidad}
                  autoComplete="nacionalidad"
                  onChange={(e) => {this.handleChange(e)}}/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  //required
                  fullWidth
                  id="telefono"
                  label="Telefono"
                  name="telefono"
                  autoComplete="telefono"
                  onChange={(e) => {this.handleChange(e)}}/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  //required
                  fullWidth
                  id="direccion_residencia"
                  label="Direccion de Residencia"
                  name="direccion_residencia"
                  autoComplete="direccion_residencia"
                  onChange={(e) => {this.handleChange(e)}}/>
              </Grid>


              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  //required
                  fullWidth
                  name="contrasena"
                  label="Contraseña"
                  type="password"
                  id="contrasena"
                  autoComplete="contrasena"
                  onChange={(e) => {this.handleChange(e)}}/>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Crear Usuario
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Ya tienes una cuenta? Inicia Sesion
                  </Link>                  
                </Grid>
              </Grid>

            </Grid>
          </form>

        </div>
      </Container>

      );
  }

}

export default withStyles(classes, { withTheme: true })(CrearUsuario);