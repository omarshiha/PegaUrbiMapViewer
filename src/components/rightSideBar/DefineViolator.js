import {useEffect, useState} from 'react';
import {Alert, Card, Col, Container, Form, Row} from "react-bootstrap";
import { ReactComponent as LicenseIcon } from '../../assets/licenseIcon.svg'
import {GetAllInspectors, GetDefineViolatorsLookup} from "../../utils/GetAllIncidents";
import Button from "react-bootstrap/Button";



function DefineViolator() {
    const [key, setKey] = useState('1');
    const [checked, setChecked] = useState("");
    const [cardType, setCardType] = useState("");
    const [lookup, setLookup] = useState([]);

    useEffect( () => {

        const fetchData = async () => {
            const data = await GetDefineViolatorsLookup()
            setLookup(data.LicenseTypeList)

        }
        fetchData()
            // make sure to catch any error
            .catch(console.error);
        // setInspectors(res.InspectorsList)
        // console.log(res)

    }, [])

    const verify = () => {

    }

    const handleCheck = (checked) => {
        setChecked(checked)
    }

    const handleCards = (type) => {
        setCardType(type)
    }


    return (
        <>
                    <Container fluid className="d-flex flex-column" style={{ height: '100vh', marginTop: '15px' }}>
                                <Row>
                                    <Col>
                                        <div key={`inline-radio`} className="mb-3">
                                            <a style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <LicenseIcon />

                                            </a>
                                            <label className="header">
                                                رقم الرخصة متاح
                                            </label>
                                            <Form.Check
                                                inline
                                                label="نعم"
                                                name="group1"
                                                type={'radio'}
                                                id={`inline-radio-1`}
                                                onClick={() => handleCheck(true)}
                                            />
                                            <Form.Check
                                                inline
                                                label="لا"
                                                name="group1"
                                                type={'radio'}
                                                id={`inline-radio-2`}
                                                onClick={() => handleCheck(false)}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                        <br/>
                        <br/>

                                {checked && checked == true &&
                                <>
                                    <Row>
                                        <Col xs={5}>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>نوع الرخصة</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>اختر</option>
                                                        {lookup && lookup.map((option) => {
                                                            return (
                                                                <option value={option.ID}>{option.value}</option>
                                                            )
                                                        })}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col xs={5}>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>رقم الرخصة</Form.Label>
                                                    <Form.Control
                                                        value={""}
                                                        type="text"
                                                        placeholder="التصنيف الفرعي"
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                        <Row>
                            <Col>
                                <Button style={{ backgroundColor: '#03766e', width: '150px', borderColor: '#fff'}} onClick={verify}>
                                    التحقق
                                </Button>
                            </Col>
                        </Row>
                                </>
                                }

                        {checked === false &&
                        <>
                            <Row>
                                <Col xs={3} style={{ justifyItems: 'center', cursor: 'pointer' }} onClick={() => handleCards("1")}>
                                    <Card style={{ width: '18rem', borderColor: cardType == "1" ? "#03766e" : "" }}>
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: 'center' }}>رقم الهوية</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={3} style={{ justifyItems: 'center', cursor: 'pointer' }} onClick={() => handleCards("2")}>
                                    <Card style={{ width: '18rem', borderColor: cardType == "2" ? "#03766e" : "" }}>
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: 'center' }}>اقامة</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={3} style={{ justifyItems: 'center', cursor: 'pointer' }} onClick={() => handleCards("3")}>
                                    <Card style={{ width: '18rem', borderColor: cardType == "3" ? "#03766e" : "" }}>
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: 'center' }}>رقم المنشأ الوطني</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={3} style={{ justifyItems: 'center', cursor: 'pointer' }} onClick={() => handleCards("4")}>
                                    <Card style={{ width: '18rem', borderColor: cardType == "4" ? "#03766e" : "" }}>
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: 'center' }}>لوحة السيارة</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <br />
                            <br />
                            {
                                cardType == "1" &&
                                <>
                                    <Row>
                                        <Col xs={5}>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>رقم الهوية</Form.Label>
                                                    <Form.Control
                                                        value={""}
                                                        type="text"
                                                        placeholder="رقم الهوية"
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col xs={5}>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>تاريخ الميلاد</Form.Label>
                                                    <Form.Control
                                                        value={""}
                                                        type="date"
                                                        placeholder="التصنيف الفرعي"
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button style={{ backgroundColor: '#03766e', width: '150px', borderColor: '#fff'}} onClick={verify}>
                                                التحقق
                                            </Button>
                                        </Col>
                                    </Row>
                                </>
                            }
                            {
                                cardType == "2" &&
                                <>
                                    <>
                                        <Row>
                                            <Col xs={5}>
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>رقم الاقامة</Form.Label>
                                                        <Form.Control
                                                            value={""}
                                                            type="text"
                                                            placeholder="رقم الاقامة"
                                                        />
                                                    </Form.Group>
                                                </Form>
                                            </Col>
                                            <Col xs={5}>
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>تاريخ الميلاد</Form.Label>
                                                        <Form.Control
                                                            value={""}
                                                            type="date"
                                                            placeholder="التصنيف الفرعي"
                                                        />
                                                    </Form.Group>
                                                </Form>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button style={{ backgroundColor: '#03766e', width: '150px', borderColor: '#fff'}} onClick={verify}>
                                                    التحقق
                                                </Button>
                                            </Col>
                                        </Row>
                                    </>
                                </>
                            }
                            {
                                cardType == "3" &&
                                <>
                                    <>
                                        <Row>
                                            <Col xs={5}>
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>رقم المنشأة الوطني</Form.Label>
                                                        <Form.Control
                                                            value={""}
                                                            type="text"
                                                            placeholder="رقم المنشأة الوطني"
                                                        />
                                                    </Form.Group>
                                                </Form>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button style={{ backgroundColor: '#03766e', width: '150px', borderColor: '#fff'}} onClick={verify}>
                                                    التحقق
                                                </Button>
                                            </Col>
                                        </Row>
                                    </>
                                </>
                            }
                            {
                                cardType == "4" &&
                                <>
                                    <>
                                        <>
                                            <Row>
                                                <Col xs={5}>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>نوع رمز السيارة</Form.Label>
                                                            <Form.Select aria-label="Default select example">
                                                                <option value="">اختر</option>
                                                                <option value="plateNumber">رقم لوحة السيارة</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Form>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button style={{ backgroundColor: '#03766e', width: '150px', borderColor: '#fff'}} onClick={verify}>
                                                        التحقق
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </>
                                    </>
                                </>
                            }
                        </>
                        }
                    </Container>
        </>
    );
}

export default DefineViolator;
