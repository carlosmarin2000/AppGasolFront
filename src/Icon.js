import L from 'leaflet';

export const IconConfig = new L.Icon({
    iconUrl: require("./img/ico.svg"),
    iconRetinaUrl: require("./img/ico.svg"),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(25, 25),
    className: 'leaflet-div-icon'
  });
  
