import {createContext, useContext, useEffect} from "react";
import {mapglApiKey} from "../../utils/Consts";
import {MapContext} from "../../App";

let mapgl = window.mapgl;

export function Map(props) {
    const map = useContext(MapContext);

    useEffect(() => {

        let markerObjs = []
        map && props.markers && props.markers.length > 0 && props.markers.map((incident) => {
            let markerObj = new mapgl.Marker(map, {
                coordinates: [incident.x, incident.y],
                icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHiSURBVHgBlZLRThNBFIbPzM6ui5R2DSUhSmW5ond9A2hD5NonMPYJ0CcQnkCNL6DxMQyW9M47uTHIjWNjFGww2wK2pbtzmDOkDR1Kt/w3c/bM5Dv/OXsYWKoVF0OF3g9Il9z43lixk9xOJMrdhukU7q4+fmEnGdzibilXeOe796NxpHa3tfz37OiZDiPea69UZBSNdahhNTozXqZ+G4yU9XM/XceVOgxiLzvicgjcLRaeUxuc82g+s/AFUvRgZr5uAAy2qLMRYC0MAkD2ylS/F9Rd7nXTgOTSFzP75FKh+3oECF52a+AuP7uwD1MqP5uvM2C6OHv6qbhUNkDzIxhs08fDuUcf4Q6iOWe8OTMeBx3TIY9BhBRQJcdJb9WWcESLTgQMDfDJwa89BrinE/7x6e9NuKPavdaaAeFVl2aGjDlVfUTdfqdEOzYt7Pj0z1qikkCHsnLY+DAEVg6kVAhvKf7XOVmfBtaLO7n//fMSxYqp6iA/3ENxwd+QyzjpL5+cN0tpwOZZc924Q3hPY7sBrEgZAcOXFNNc+ir2YYK7btwxRfWq7Vy/Y/bjz6uFGgIrCy6O9HB744CIKjdwt3HYqF6/E/bjhOEOR1aOVbwIkyVtd2MdkgZbP0nIRbT5TX6185dFo7jg8B9djgAAAABJRU5ErkJggg==',
            });
            markerObj.on('click', () => {
                console.log(incident)
                props.toggleRightBar()
                props.setActiveIncident(incident)
            })
            markerObjs.push(markerObj)
        })
        props.setMarkerObjs && props.setMarkerObjs(markerObjs)

    }, [props.markers, map]);

    return (
        <div id="mapContainer" className="mapContainer" style={{height: '100vh', maxWidth: '100%', position: 'relative'}}>
            {props.children}
        </div>
    );
}
