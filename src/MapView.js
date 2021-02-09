import L from 'leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapView() {
    var datos
    const [data, setData] = useState( [] );

    useEffect(async () => {
      const result = await axios(
        'http://localhost:3000',
      );
        
      setData(result.data);
      datos = result.data
      console.log(result.data)
    }, []);
    
  return (
    
    <div className="App">
     <MapContainer center ={[4.083794705460288, -76.19565156780332]} zoom ={14}>
     {
        data.map((dato, key) => {
            return <div key={key}>
            <TileLayer 
            url ="https://api.mapbox.com/styles/v1/carlosmarin2029/ckk07ngj9195318m8wc9ssocb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2FybG9zbWFyaW4yMDI5IiwiYSI6ImNrazA3cTN6dDBldHQyeHBlbXJmaGozb3UifQ.E2sV4SoTq_Iwqg3zlREv0w" 
            />
            <Marker position={[dato.latitud, dato.longitud]}>
              <Popup><div>{dato.nombre}<br></br>{dato.direccion}<br></br>{dato.telefono}</div></Popup>
            </Marker></div>
        })
    }
       
     </MapContainer>
    </div>

    
  );
}

export default MapView;