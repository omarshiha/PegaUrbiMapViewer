import './App.css';
import {Map} from "./components/map/Map";
import {Button, Card, Col, Container, FormControl, InputGroup, ListGroup, Row} from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {createContext, useEffect, useState} from "react";
import LeftSideBar from './components/leftSideBar/LeftSideBar'

import { ReactComponent as MapLayerEnabledIcon } from './assets/MapLayerEnabled.svg'
import { ReactComponent as MapLayerDisabledIcon } from './assets/MapLayerDisabled.svg'
import { ReactComponent as MapListViewIcon } from './assets/MapListView.svg'
import { ReactComponent as MapListViewEnabledIcon } from './assets/MapListViewEnabled.svg'
import { ReactComponent as Search1Icon } from './assets/search1.svg'
import { ReactComponent as FilterIcon } from './assets/filter.svg'
import { ReactComponent as FilterActiveIcon } from './assets/filterActive.svg'
import { ReactComponent as LayersIcon } from './assets/layers.svg'
import { ReactComponent as LayersActiveIcon } from './assets/layersActive.svg'
import { ReactComponent as ChartIcon } from './assets/chart.svg'
import { ReactComponent as ChartActiveIcon } from './assets/chartActive.svg'
import { ReactComponent as SelectIcon } from './assets/select.svg'
import { ReactComponent as SelectActiveIcon } from './assets/selectActive.svg'
import {GetAllIncidents} from "./utils/GetAllIncidents";
import {mapglApiKey} from "./utils/Consts";
import FilterCard from "./components/filterCard/FilterCard";

let mapgl = window.mapgl;

export const MapContext = createContext()

function App() {
    const [checked, setChecked] = useState(false);
    const [viewMode, setViewMode] = useState(1);
    const [activeTool, setActiveTool] = useState(0);
    const [show, setShow] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [incidents, setIncidents] = useState([]);
    const [map, setMap] = useState(null);




    useEffect(() => {
        let map = new mapgl.Map("mapContainer", {
            center: [39.905400207, 21.317755175],
            zoom: 13,
            key: mapglApiKey,
            pitch: 40,
            rotation: 0,
            lang: "ar",
            copyright: false,
            zoomControl: "bottomRight",
            useRtlTextPlugin: "always-on"
        });

        setMap(map)

    }, []);

    useEffect(async () => {
        let res = await GetAllIncidents()
        setIncidents(res.IncidentList)
        let markers = []
        res.IncidentList && res.IncidentList.map((incident) => {
            markers.push({
                    "x": incident.CoordinateX,
                    "y": incident.CoordinateY,
                    "ID": incident.ID
                })
        })
        setMarkers(markers)
        console.log(res)
    }, [])

    const handleClose = () => {
        setViewMode(1)
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const openLeftSideBar = (e) => {
        setViewMode(2)
        handleShow()
    }


  return (
      <MapContext.Provider value={map}>
        <Map markers={markers}>
          <div style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              zIndex: '1',
              pointerEvents: 'none'
          }}>
              <Container fluid className="d-flex flex-column" style={{ height: '100vh' }}>
                  <Row>
                      <Col>
                          <h1 className="header">
                              <ButtonGroup className="mb-2" style={{ pointerEvents: 'all' }}>
                                      <ToggleButton
                                          style={{ backgroundColor: viewMode == 1 ? '#81BE41' : '#fff', borderColor: '#ffffff00'  }}
                                          key={2}
                                          id={`radio-1`}
                                          type="radio"
                                          variant="secondary"
                                          name="radio"
                                          value={1}
                                          checked={viewMode == 1}
                                          onChange={(e) => setViewMode(e.currentTarget.value)}
                                      >
                                          {viewMode == 1 ? <MapLayerEnabledIcon /> : <MapLayerDisabledIcon />}
                                      </ToggleButton>
                                      <ToggleButton
                                          style={{ backgroundColor:  viewMode == 2 ? '#81BE41' : '#ffffff', borderColor: '#ffffff00' }}
                                          key={2}
                                          id={`radio-2`}
                                          type="radio"
                                          variant="secondary"
                                          name="radio"
                                          value={2}
                                          checked={viewMode == 2}
                                          onClick={openLeftSideBar}
                                      >
                                          {viewMode == 2 ? <MapListViewEnabledIcon /> : <MapListViewIcon />}
                                      </ToggleButton>
                              </ButtonGroup>
                          </h1>
                      </Col>
                      <Col style={{justifyItems: 'self-end'}}>
                          <h1 className="header" style={{ pointerEvents: 'all' }}>
                              <ButtonGroup className="mb-2">
                              <InputGroup>
                                  <InputGroup.Text style={{ borderColor: '#ffffff00', backgroundColor: '#fff' }}>
                                      <Search1Icon />
                                  </InputGroup.Text >
                                  <FormControl
                                      style={{ borderColor: '#ffffff00', backgroundColor: '#fff' }}
                                      placeholder="البحث"
                                      aria-label="Search"
                                  />
                              </InputGroup>
                              </ButtonGroup>
                          </h1>
                      </Col>
                  </Row>
                  <Row>
                      <Col>

                      </Col>
                      <Col style={{ justifyItems: 'self-end' }}>
                          <Row>
                              {/*<Col xs={1}>*/}

                              {/*</Col>*/}
                              <Col xs={10} style={{ justifyItems: 'self-end' }}>
                                  <FilterCard />
                              </Col>
                              <Col xs={2} style={{ justifyItems: 'self-end' }}>
                                  <ListGroup as="ul" style={{ pointerEvents: 'all', maxWidth: '80px' }}>
                                      <ListGroup.Item value="1" onClick={(e) => setActiveTool(activeTool == "1" ? "0" : e.currentTarget.value)} as="li" style={{ cursor: 'pointer', backgroundColor:  activeTool == 1 ? '#81BE41' : '#ffffff', marginBottom: '7px', borderRadius: '10px' }}>
                                          {activeTool == 1 ? <FilterActiveIcon /> : <FilterIcon /> }
                                      </ListGroup.Item>
                                      <ListGroup.Item value="2" onClick={(e) => setActiveTool(activeTool == "2" ? "0" : e.currentTarget.value)} as="li" style={{ cursor: 'pointer', backgroundColor:  activeTool == 2 ? '#81BE41' : '#ffffff', marginBottom: '7px', borderRadius: '10px' }}>
                                          {activeTool == 2 ? <LayersActiveIcon /> : <LayersIcon /> }
                                      </ListGroup.Item>
                                      <ListGroup.Item value="3" onClick={(e) => setActiveTool(activeTool == "3" ? "0" : e.currentTarget.value)} as="li" style={{ cursor: 'pointer', backgroundColor:  activeTool == 3 ? '#81BE41' : '#ffffff', marginBottom: '7px', borderRadius: '10px' }}>
                                          {activeTool == 3 ? <ChartActiveIcon /> : <ChartIcon /> }
                                      </ListGroup.Item>
                                      <ListGroup.Item value="4" onClick={(e) => setActiveTool(activeTool == "4" ? "0" : e.currentTarget.value)} as="li" style={{ cursor: 'pointer', backgroundColor:  activeTool == 4 ? '#81BE41' : '#ffffff', marginBottom: '7px', borderRadius: '10px' }}>
                                          {activeTool == 4 ? <SelectActiveIcon /> : <SelectIcon /> }
                                      </ListGroup.Item>
                                  </ListGroup>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
                  <Row className="mt-auto mb-3" style={{ bottom: '5px' }}>
                      <Col>
                          <Card style={{ width: '18rem', pointerEvents: 'all' }}>
                              <ListGroup variant="flush">
                                  <ListGroup.Item>معالم الخريطة</ListGroup.Item>
                                  <ListGroup.Item style={{ borderColor: '#ffffff00' }}>البلاغات التي لم تسند للمراقب</ListGroup.Item>
                                  <ListGroup.Item>اسناد البلاغات الي المراقب</ListGroup.Item>
                              </ListGroup>
                          </Card>
                      </Col>
                      <Col className="d-flex flex-column justify-content-center align-items-center" style={{ justifyItems: 'center'}}>
                          <Button className="mt-auto" style={{ backgroundColor: '#02776D', color: '#fff', width: '160px', pointerEvents: 'all' }}>اسناد</Button>
                      </Col>
                      <Col className="mb-3" style={{ justifyItems: 'self-end' }}>

                      </Col>
                  </Row>
                  <LeftSideBar handleShow={handleShow} handleClose={handleClose} show={show} incidents={incidents} />
              </Container>
          </div>
      </Map>
      </MapContext.Provider>
  );
}

export default App;
