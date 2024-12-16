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


function RightSideBar({show, handleClose, incident}) {
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

            {/*{success && <SuccessPage />}*/}
            {success &&
                <Alert variant="success">
                    <Alert.Heading> تمت عملية الاسناد بنجاح</Alert.Heading>
                    <p>
                        تم إسناد البلاغ رقم (45352566) يمكنك متابعة حالات الاسناد من خلال حالة البلاغات المسندة
                    </p>
                </Alert>
            }

                <>
                    <Offcanvas style={{ width: '75vw' }} show={show} onHide={handleClose} >
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
                            {key == "1" &&
                                <>
                                    <img src={staticIncidentImage} style={{ width: '100%', maxHeight: '340px', marginBottom: '20px', objectFit: 'cover' }} />

                                    {assign ?
                                        <>
                                            <InspectorsList incident={incident} toggleSuccess={toggleSuccess} />
                                        </>
                                        :
                                        <>
                                            <Tabs
                                                defaultActiveKey="xx"
                                                id="fill-tab-example"
                                                className="mb-3"
                                                fill
                                            >
                                                <Tab style={{ backgroundColor: '#f8faf5' }} eventKey="home" title={" قناة الكشف " + incident.ExternalChannelName} disabled>
                                                </Tab>
                                                <Tab style={{ backgroundColor: '#f8faf5' }} eventKey="profile" title={" رمز البلاغ " + incident.ExternalChannelIncidentID} disabled>
                                                </Tab>
                                                <Tab style={{ backgroundColor: '#f8faf5' }} eventKey="longer-tab" title={" الاحداثيات " + incident.CoordinateX + "/" + incident.CoordinateY} disabled>
                                                </Tab>
                                            </Tabs>

                                            <Row>
                                                <Col>
                                                    معرف المخالف:
                                                    {incident.ID}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={5}>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>التصنيف الرئيسي</Form.Label>
                                                            <Form.Control
                                                                value={mainClassification}
                                                                type="text"
                                                                placeholder="التصنيف الرئيسي"
                                                                disabled={true}
                                                            />
                                                        </Form.Group>
                                                    </Form>
                                                </Col>
                                                <Col xs={5}>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>التصنيف الفرعي</Form.Label>
                                                            <Form.Control
                                                                value={subClassification}
                                                                type="text"
                                                                placeholder="التصنيف الفرعي"
                                                                disabled={true}
                                                            />
                                                        </Form.Group>
                                                    </Form>
                                                </Col>
                                                <Col className="d-flex  justify-content-between" xs={2}>
                                                    <Button style={{ marginBottom: '15px', backgroundColor: '#e8ecee', borderColor: '#e8ecee' }} className="mt-auto">
                                                        <EditIcon />
                                                    </Button>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={3}>
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
                                                        />
                                                    </div>
                                                </Col>
                                                <Col xs={3}>
                                                    <Button style={{ backgroundColor: '#03766e', width: '150px', borderColor: '#fff'}} onClick={() => setAssign(true)}>
                                                        <SendIcon />
                                                        اسناد
                                                    </Button>
                                                </Col>
                                                <Col className="d-flex justify-content-end" xs={5}>
                                                    <div style={{ marginTop: '4px' }}>
                                                        <DislikeIcon />
                                                    </div>
                                                    <label style={{ color: '#BD271E', textDecoration: 'underline', fontSize: '18px'}}>
                                                        بلاغ غير صحيح
                                                    </label>
                                                    {/*<Button style={{ marginBottom: '15px' }} className="mt-auto"></Button>*/}
                                                </Col>
                                            </Row>
                                        </>
                                    }
                                </>
                            }
                            {key == "2" &&
                                <>
                                  <DefineViolator />
                                </>
                            }
                        </Container>
                    </Offcanvas>
                </>
        </>
    );
}

export default RightSideBar;
