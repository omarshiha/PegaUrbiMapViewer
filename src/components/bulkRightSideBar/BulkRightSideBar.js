import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Alert, Col, Container, Form, Row} from "react-bootstrap";
import { ReactComponent as FilterIcon } from '../../assets/filter.svg'
import {GetAllIncidents} from "../../utils/GetAllIncidents";
import GenericIncidentCard from "../genericIncidentCard/GenericIncidentCard";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {staticIncidentImage} from "../../utils/Consts";
import InspectorsList from "./InspectorsList";
import SuccessPage from "../SuccessPage";
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg'
import { ReactComponent as SendIcon } from '../../assets/sendIcon.svg'
import { ReactComponent as DislikeIcon } from '../../assets/dislike.svg'
import DefineViolator from "./DefineViolator";


function BulkRightSideBar({show, handleClose, incident}) {
    const [key, setKey] = useState('1');
    const [assign, setAssign] = useState(false);
    const [success, setSuccess] = useState(false);
    const [mainClassification, setMainClassification] = useState("");
    const [subClassification, setSubClassification] = useState("");

    const toggleSuccess = () => {
        showSuccessMessage()
        setAssign(false)
        handleClose()
    }

    const showSuccessMessage = () => {
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 5000)
    }

    useEffect(() => {
        setMainClassification(incident.MainClassificationName)
        setSubClassification(incident.ClassificationName)
    }, [incident])

    useEffect(() => {
        return () => {
            setSuccess(false)
        };
    }, []);

    return (
        <>

            <>
                <Offcanvas style={{ width: '85vw' }} show={show} onHide={handleClose} >
                    <Offcanvas.Header closeButton>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="1" title="تفاصيل البلاغ">
                            </Tab>
                            <Tab eventKey="2" title="تفاصيل المخالف">
                            </Tab>
                        </Tabs>
                    </Offcanvas.Header>
                    <Container fluid className="d-flex flex-column" style={{ height: '100vh', marginTop: '15px' }}>
                      xx
                    </Container>
                </Offcanvas>
            </>
        </>
    );
}

export default BulkRightSideBar;
