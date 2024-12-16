import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import { ReactComponent as FilterIcon } from '../../assets/filter.svg'
import {GetAllIncidents, GetAllInspectors, pushToCIS} from "../../utils/GetAllIncidents";
import GenericIncidentCard from "../genericIncidentCard/GenericIncidentCard";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {staticIncidentImage} from "../../utils/Consts";
import SuccessPage from "../SuccessPage";
import { ReactComponent as SendIcon } from '../../assets/sendIcon.svg'


function InspectorsList({show, handleClose, incident, toggleSuccess}) {
    const [key, setKey] = useState('1');
    const [assign, setAssign] = useState(false);
    const [success, setSuccess] = useState(false);
    const [inspectors, setInspectors] = useState([]);
    const [activeInspector, setActiveInspector] = useState("");

    useEffect( () => {

        const fetchData = async () => {
            const data = await GetAllInspectors()
            console.log(data)
            setInspectors(data.InspectorsList)

        }
        fetchData()
            // make sure to catch any error
            .catch(console.error);
        // setInspectors(res.InspectorsList)
        // console.log(res)

    }, [])

    const assignToCIS = () => {
        toggleSuccess()
        pushToCIS(incident.ID, inspectors[0].pyUserIdentifier)
    }

    return (
        <>
                    <>
                        <ListGroup defaultActiveKey="#link1">
                            {inspectors && inspectors.length && inspectors.map((inspector) => {
                                return(
                                    <ListGroup.Item style={{ borderColor: inspector.pyUserIdentifier == activeInspector ? "#02776D" : "" }} action onClick={() => setActiveInspector(inspector.pyUserIdentifier)}>
                                        {inspector.pyLabel}
                                    </ListGroup.Item>
                                )
                            })}

                        </ListGroup>


                        <Row style={{ bottom: '10px', position: 'absolute' }}>
                            <Col>
                                <Button style={{ backgroundColor: '#03766e', width: '150px', borderColor: '#fff'}} disabled={!activeInspector} onClick={assignToCIS}>
                                    <SendIcon />
                                    اسناد
                                </Button>
                            </Col>
                            <Col>
                                <Button style={{ backgroundColor: '#fafafa', width: '150px', borderColor: '#fff', color: 'black'}} onClick={() => setAssign(true)}>
                                    الرجوع
                                </Button>
                            </Col>
                        </Row>
                    </>
        </>
    );
}

export default InspectorsList;
