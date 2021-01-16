import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';
import {IconConfig} from './Icon';

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

function App() {
  return (
    <div className="App">
     <MapContainer center ={[4.083794705460288, -76.19565156780332]} zoom ={14}>
       <TileLayer 
       url ="https://api.mapbox.com/styles/v1/carlosmarin2029/ckk07ngj9195318m8wc9ssocb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2FybG9zbWFyaW4yMDI5IiwiYSI6ImNrazA3cTN6dDBldHQyeHBlbXJmaGozb3UifQ.E2sV4SoTq_Iwqg3zlREv0w" 
       />
       <Marker position={[4.083794705460288, -76.19565156780332]}  icon={IconConfig}>
       </Marker>
     </MapContainer>
    </div>
  );
}

export default App;

