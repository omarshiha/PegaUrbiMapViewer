import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Alert, Col, Container, Form, Row} from "react-bootstrap";
import { ReactComponent as FilterIcon } from '../../assets/filter.svg'
import {
    GetAllIncidents,
    GetAllInspectors,
    GetUpdateClassificationLookup,
    performAction
} from "../../utils/GetAllIncidents";
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
import MarkAsWrongIncident from "./MarkAsWrongIncident";


function RightSideBar({show, handleClose, incident}) {
    const [key, setKey] = useState('1');
    const [assign, setAssign] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isWrongIncident, setIsWrongIncident] = useState(false);
    const [mainClassification, setMainClassification] = useState("");
    const [subClassification, setSubClassification] = useState("");
    const [mainNewValue, setMainNewValue] = useState("");
    const [subNewValue, setSubNewValue] = useState("");
    const [lookup, setLookup] = useState([]);
    const [subClassificationLookup, setSubClassificationLookup] = useState([]);

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

    useEffect( () => {

        const fetchData = async () => {
            const data = await GetUpdateClassificationLookup()
            setLookup(data.MainClassificaitonList)
        }
        fetchData().catch(console.error);

    }, [])

    const toggleEditMode = () => {
        if(isEditMode){
            let payload = {
                "ActionType" : "Update Classification",
                "ExistingClassificationId" : incident.ClassificationID,
                "NewClassificationId" : mainNewValue,
                "SelectedIncidents" : [incident.ID]
            }
            performAction(payload).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })

        }
        setIsEditMode(!isEditMode)
    }

    const handleMainLookupChange = (e) => {
        let val = e.target.value;
        setMainNewValue(val)
        let subLookup;
        lookup && lookup.map((el) => {
            if(el.MainVpClassificationId == val){
                subLookup = el.SubClassificationList
                setSubClassificationLookup(subLookup)
            }
        })
    }

    const handleSubLookupChange = (e) => {
        let val = e.target.value;
        setSubNewValue(val)
    }

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

                                    {isWrongIncident &&
                                        <MarkAsWrongIncident
                                            incident={incident}
                                            showSuccessMessage={showSuccessMessage}
                                            setAssign={setAssign}
                                            handleClose={handleClose}
                                        />
                                    }


                                    {assign === true && !isWrongIncident &&
                                        <>
                                            <InspectorsList incident={incident} toggleSuccess={toggleSuccess} />
                                        </>}

                                    {
                                        assign === false && !isWrongIncident &&
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
                                                            {isEditMode ?
                                                                <Form.Select value={mainNewValue} aria-label="Default select example" onChange={handleMainLookupChange}>
                                                                    <option>اختر</option>
                                                                    {lookup && lookup && lookup.map((option) => {
                                                                        return (
                                                                            <option value={option.MainVpClassificationId}>{option.MainClassificationName}</option>
                                                                        )
                                                                    })}
                                                                </Form.Select>
                                                                :
                                                                <Form.Control
                                                                    value={mainClassification}
                                                                    type="text"
                                                                    placeholder="التصنيف الرئيسي"
                                                                    disabled={!isEditMode}
                                                                />
                                                            }


                                                        </Form.Group>
                                                    </Form>
                                                </Col>
                                                <Col xs={5}>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>التصنيف الفرعي</Form.Label>
                                                            {isEditMode ?
                                                                <Form.Select value={subNewValue} onChange={handleSubLookupChange} aria-label="Default select example">
                                                                    <option>اختر</option>
                                                                    {subClassificationLookup && subClassificationLookup && subClassificationLookup.map((option) => {
                                                                        return (
                                                                            <option value={option.SubVpClassficationId}>{option.SubClassificationName}</option>
                                                                        )
                                                                    })}
                                                                </Form.Select>
                                                                :
                                                                <Form.Control
                                                                    value={subClassification}
                                                                    type="text"
                                                                    placeholder="التصنيف الفرعي"
                                                                    disabled={!isEditMode}
                                                                />
                                                            }

                                                        </Form.Group>
                                                    </Form>
                                                </Col>
                                                <Col className="d-flex  justify-content-between" xs={2}>
                                                    <Button onClick={toggleEditMode} style={{ marginBottom: '15px', backgroundColor: '#e8ecee', borderColor: '#e8ecee' }} className="mt-auto">
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
                                                            checked={true}
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
                                                    <label onClick={() => setIsWrongIncident(true)} style={{ color: '#BD271E', textDecoration: 'underline', fontSize: '18px', cursor: 'pointer'}}>
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
