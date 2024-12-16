import {useContext, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import {MapContext} from "../../App";
import Accordion from 'react-bootstrap/Accordion';


function FilterCard({filterMarkers, markers}) {
    const [filter, setFilter] = useState({});
    const [dateFilter, setDateFilter] = useState("");

    const map = useContext(MapContext);

    const addDateFilter = (e) => {
        setDateFilter(e.target.value)
    }

    const applyFilter = () => {
        let filteredMarkers = []
        markers && markers.map((marker) => {
            let incidentDate = Date.parse(marker.date)
            let filterDate = Date.parse(dateFilter)
            if (dateFilter && marker && marker.date && incidentDate < filterDate) {
                filteredMarkers.push(marker)
            }
        })
        filterMarkers(filteredMarkers)
    }


    return (
        <div style={{pointerEvents: 'all'}}>
            <Card style={{minWidth: '300px'}}>
                <Card.Header>
                    <Row>
                        <Col>
                            تصفية
                        </Col>
                        <Col style={{justifyItems: 'self-end'}}>
                            <div>
                                <label>الغاء</label>
                            </div>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Form style={{direction: 'rtl'}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>التاريخ</Form.Label>
                            <Form.Control onChange={addDateFilter} style={{direction: 'rtl'}} type="date"
                                          placeholder="Enter email" className="rtl"/>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>الامانة</Form.Label>
                            <Form.Select aria-label="الامانة">
                                <option>الامانة</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>البلدية</Form.Label>
                            <Form.Control type="text" placeholder="البلدية"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>التصنيف الرئيسي</Form.Label>
                            <Form.Select aria-label="التصنيف الرئيسي">
                                <option>التصنيف الرئيسي</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>التصنيف الفرعي</Form.Label>
                            <Form.Select aria-label="التصنيف الفرعي">
                                <option>التصنيف الفرعي</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>وضع الكشف</Accordion.Header>
                                <Accordion.Body>
                                    <div style={{display: 'flex'}}>
                                        <Form.Check // prettier-ignore
                                            type={"checkbox"}
                                            id={`default-${"checkbox"}`}
                                            label={`AI`}
                                            style={{marginLeft: '5px'}}
                                        />
                                        <Form.Check // prettier-ignore
                                            type={"checkbox"}
                                            id={`default-${"checkbox"}`}
                                            label={`يدوي`}
                                            style={{marginRight: '5px'}}
                                        />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>قناة الكشف</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Check // prettier-ignore
                                        type={"checkbox"}
                                        id={`default-${"checkbox"}`}
                                        label={`عدسة بلدي`}
                                        style={{marginRight: '5px'}}
                                    />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <div style={{display: 'flex'}}>
                        <Button onClick={applyFilter} variant="primary" type="submit">
                            تطبيق
                        </Button>
                        <Button variant="primary" type="submit">
                            الغاء
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default FilterCard;
