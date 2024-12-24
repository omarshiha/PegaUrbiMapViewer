import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Col, Container, Form, Row} from "react-bootstrap";
import { ReactComponent as FilterIcon } from '../../assets/filter.svg'
import {GetAllIncidents} from "../../utils/GetAllIncidents";
import GenericIncidentCard from "../genericIncidentCard/GenericIncidentCard";
import RightSideBar from "../rightSideBar/RightSideBar";

function LeftSideBar({show, handleClose, incidents, setActiveIncident, toggleRightBar}) {
    // const [activeIncident, setActiveIncident] = useState({});
    const [showRight, setShowRight] = useState(false);

    const handleShow = () => setShowRight(true);

    const openIncidentDetails = (incident) => {
        handleClose()
        toggleRightBar()
        setActiveIncident(incident)
        setShowRight(true)
    }

    const handleCloseRight = () => {
        handleClose()
        setShowRight(false);
    }

    return (
        <>
            <Offcanvas style={{ width: '50vw' }} placement="end" show={show} onHide={handleClose}>
                <Container fluid className="d-flex flex-column" style={{ height: '100vh', marginTop: '15px' }}>
                    <Row>
                        <Col>
                                <div key={`inline-radio`} className="mb-3">
                                    <label className="header">
                                        اسناد البلاغات الي
                                    </label>
                                    <Form.Check
                                        inline
                                        label="CRM"
                                        name="group1"
                                        type={'radio'}
                                        id={`inline-radio-1`}
                                        disabled={true}
                                    />
                                    <Form.Check
                                        inline
                                        label="CIS"
                                        name="group1"
                                        type={'radio'}
                                        id={`inline-radio-2`}
                                        checked={true}
                                    />
                                </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={11}>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control style={{ backgroundColor: '#fcfcfc', borderColor: '#f0f0f0' }} type="text" placeholder="name@example.com" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={1}>
                            <Button style={{ backgroundColor: '#fcfcfc', borderColor: '#f0f0f0' }}><FilterIcon /></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                    <div key={`default-checkbox`} className="mb-3">
                                        {/*<Form.Check // prettier-ignore*/}
                                        {/*    type={'checkbox'}*/}
                                        {/*    id={`default-checkbox`}*/}
                                        {/*    label={`تحديد الكل`}*/}
                                        {/*/>*/}
                                    </div>
                            </Form>
                        </Col>
                    </Row>
                    <Row style={{ overflowY: 'scroll' }}>
                        <Col>
                            {incidents && incidents.length > 0 && incidents.map((incident) => {
                                return(
                                    <GenericIncidentCard handleClose={handleClose} incident={incident} openIncidentDetails={openIncidentDetails} />
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
                {/*<Offcanvas.Header>*/}
                {/*    <Offcanvas.Title>Offcanvas</Offcanvas.Title>*/}
                {/*</Offcanvas.Header>*/}
                {/*<Offcanvas.Body>*/}
                {/*    Some text as placeholder. In real life you can have the elements you*/}
                {/*    have chosen. Like, text, images, lists, etc.*/}
                {/*</Offcanvas.Body>*/}
            </Offcanvas>
            {/*<RightSideBar show={showRight} handleShow={handleShow} incident={activeIncident} handleClose={handleCloseRight} />*/}
        </>
    );
}

export default LeftSideBar;
