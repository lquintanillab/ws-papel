import location from '../../assets/location.svg';
import L from 'leaflet'

export const IconLocation =L.icon({
    iconUrl: location,
    iconRetinaUrl: location,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [60,50],
    className:"leaflet-venue-icon"
})

