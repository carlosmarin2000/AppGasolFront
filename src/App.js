import './App.css';
import React, { Component} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const PuntoMap = ({arrayMarkers}) => {
  return(
    arrayMarkers.map((punto)=>(
      <Marker position = {[punto.latitude, punto.longitude]}>
        <Popup>
          {punto.name}. <br/>
          {punto.address}. <br/>
          {punto.phone}. <br/>
        </Popup>
      </Marker>
    ))
  )
};

class App extends Component {    
  
  state = {
    arrayMarkers:[]
  };

  componentDidMount() {
    fetch("http://localhost:3000/",{
      method: 'GET',
      headers: {
        Accept: 'application/json',
                'Content-Type':'application/json'
      }
    })
    .then(request => request.json())
    .then((dataJSON) => {
      console.log(dataJSON)
      this.setState({ arrayMarkers: dataJSON })
    })
    .catch(console.log)
  };

  render(){
    return (
      <div className="App">
      <MapContainer center ={[4.083794705460288, -76.19565156780332]} zoom ={14}>
        <TileLayer 
        url ="https://api.mapbox.com/styles/v1/carlosmarin2029/ckk07ngj9195318m8wc9ssocb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2FybG9zbWFyaW4yMDI5IiwiYSI6ImNrazA3cTN6dDBldHQyeHBlbXJmaGozb3UifQ.E2sV4SoTq_Iwqg3zlREv0w" 
        />
        <PuntoMap  arrayMarkers = {this.arrayMarkers} />
      </MapContainer>
      </div>
    );
  }
}

export default App;

