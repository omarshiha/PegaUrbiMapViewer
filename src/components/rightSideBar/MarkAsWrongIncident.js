import {useEffect, useState} from 'react';
import {Alert, Card, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import { ReactComponent as LicenseIcon } from '../../assets/licenseIcon.svg'
import {
    GetAllInspectors,
    GetDefineViolatorsLookup,
    GetWrongIncidentLookup,
    performAction
} from "../../utils/GetAllIncidents";
import Button from "react-bootstrap/Button";



function MarkAsWrongIncident({incident, showSuccessMessage, setAssign, handleClose}) {
    const [key, setKey] = useState('1');
    const [checked, setChecked] = useState("");
    const [cardType, setCardType] = useState("");
    const [reason, setReason] = useState("");
    const [comment, setComment] = useState("");
    const [lookup, setLookup] = useState([]);

    useEffect( () => {

        const fetchData = async () => {
            const data = await GetWrongIncidentLookup()
            setLookup(data.ReasonsList)

        }
        fetchData()
            // make sure to catch any error
            .catch(console.error);
        // setInspectors(res.InspectorsList)
        // console.log(res)

    }, [])

    const handleReasonChange = (e) => {
        setReason(e.target.value)
    }
    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }


    const submit = () => {
        let payload = {
            "ActionType" : "Wrong Incident",
            "SelectedIncidents" : [incident.ID],
            "Reasons" : reason,
            "InspectorComment": comment,
            "ListOfAttachments": []
        }

        performAction(payload).then((res) => {
            console.log(res)
            showSuccessMessage()
            setAssign(false)
            handleClose()
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <>
            <Container fluid className="d-flex flex-column" style={{ height: '100vh', marginTop: '15px' }}>
             <Row>
                 <Col xs={5}>
                     <Form>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>سبب التصنيف بانه بلاغ غير صحيح</Form.Label>
                             <Form.Select value={reason} onChange={handleReasonChange} aria-label="Default select example">
                                 <option>اختر</option>
                                 {lookup && lookup.map((option) => {
                                     return (
                                         <option value={option}>{option}</option>
                                     )
                                 })}
                             </Form.Select>
                         </Form.Group>
                     </Form>
                 </Col>
                 <Col xs={5}>

                 </Col>
             </Row>
                <Row>
                    <Col xs={12}>
                        <>
                            <FloatingLabel controlId="floatingTextarea2" label="ملاحظات">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    value={comment}
                                    onChange={handleCommentChange}
                                />
                            </FloatingLabel>
                        </>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Button onClick={submit} style={{ backgroundColor: '#03766e', width: '150px', borderColor: '#fff'}}>
                            ارسال
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MarkAsWrongIncident;
