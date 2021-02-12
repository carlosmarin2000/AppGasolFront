import L from 'leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import socketIOClient from "socket.io-client";

class MapView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datos: []
    }
    this.cargarDatos();
    ////////////////////////////////////////////
    const ENDPOINT = "http://localhost:3001";
    const socket = socketIOClient(ENDPOINT);
    socket.on('Nueva Estacion', (data) => {
      this.state.datos.push(data);
      console.log(this.state.datos);
      this.forceUpdate();
    });
    /////////////////////////////////////////////

    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

  }

  cargarDatos = async () =>{
    const result = await axios('http://localhost:3000');  
    this.setState({
      datos:result.data
    });
    console.log(this.state.datos);
  }

  crearMarcadores(){
    console.log("Creando Marcadores");
    if(this.state.datos.length == 0){
      return(
        <div>
          <TileLayer url ="https://api.mapbox.com/styles/v1/carlosmarin2029/ckk07ngj9195318m8wc9ssocb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2FybG9zbWFyaW4yMDI5IiwiYSI6ImNrazA3cTN6dDBldHQyeHBlbXJmaGozb3UifQ.E2sV4SoTq_Iwqg3zlREv0w" />
        </div>
      ); 
    } else{
      return(
        this.state.datos.map((dato, key) => {
          return <div key={key}>
          <TileLayer 
          url ="https://api.mapbox.com/styles/v1/carlosmarin2029/ckk07ngj9195318m8wc9ssocb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2FybG9zbWFyaW4yMDI5IiwiYSI6ImNrazA3cTN6dDBldHQyeHBlbXJmaGozb3UifQ.E2sV4SoTq_Iwqg3zlREv0w" 
          />
          <Marker position={[dato.latitud, dato.longitud]}>
            <Popup><div>{dato.nombre}<br></br>{dato.direccion}<br></br>{dato.telefono}</div></Popup>
          </Marker></div>
        })
      ); 
    }            
  }

  render(){
    return (
        <div className = "fullView">
          <MapContainer className ="fullView mapContainer" center = {[4.083794705460288, -76.19565156780332]} zoom ={14}>
          
          {this.crearMarcadores()}
          <div>
            <button>Test</button>
          </div>
        </MapContainer>
        </div>
      );
  }

}

export default MapView;