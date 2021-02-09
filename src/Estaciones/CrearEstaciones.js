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
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

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

class CrearEstaciones extends Component{

  constructor(props) {
    super(props)
    this.nombre = React.createRef();
    this.state = {
      open: false,
      severity : '',
      message: '',
      nombre: '',
      telefono: '',
      direccion: '',
      latitud: '',
      longitud: ''
    }
  }

  async crearEstacion(event){    
    event.preventDefault();
    try{
      const body = {
          "nombre": this.state.nombre,
          "telefono": this.state.telefono,
          "direccion": this.state.direccion,
          "latitud": parseInt(this.state.latitud),
          "longitud": parseInt(this.state.longitud)
      };
      axios.post('http://localhost:3000/station', body).then(res => {
        if(res.data == "Exito"){          
          this.setState({
            open:true,
            severity:'success',
            message:'Estacion creada con exito'});
        } else {
          this.setState({
            open:true,
            severity:'error',
            message:'No fue posible crear la Estacion'});
        }
      });      
    }catch(e){
      this.setState({
            open:true,
            severity:'error',
            message: 'No fue posible crear la Estacion'});
      console.log(e);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]:event.target.value
    })
  };

  render(){
    const {classes} = this.props;
    return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crear Estacion
          </Typography>


          <form className={classes.form} onSubmit = {(e)=>this.crearEstacion(e)}>
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

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  //required
                  fullWidth
                  id="telefono"
                  name="telefono"
                  autoComplete="telefono"
                  label="Telefono"
                  ref={this.telefono}
                  onChange={(e) => {this.handleChange(e)}}/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  //required
                  fullWidth
                  id="direccion"
                  label="Direccion"
                  name="direccion"
                  autoComplete="direccion"
                  ref={this.direccion}
                  onChange={(e) => {this.handleChange(e)}}/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  //required
                  fullWidth
                  id="latitud"
                  name="latitud"
                  autoComplete="latitud"
                  label="Latitud"
                  ref={this.latitud}
                  onChange={(e) => {this.handleChange(e)}}/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  //required
                  fullWidth
                  id="longitud"
                  name="longitud"
                  autoComplete="longitud"
                  label="Longitud"
                  ref={this.longitud}
                  onChange={(e) => {this.handleChange(e)}}/>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Crear Estacion
              </Button>
              
               <Grid item xs={12}>
                <Collapse in={this.state.open}>
                  <Alert severity={this.state.severity}>{this.state.message}</Alert>
                </Collapse>
              </Grid>
              

            </Grid>
          </form>

        </div>
      </Container>

      );
  }

}

export default withStyles(classes, { withTheme: true })(CrearEstaciones);