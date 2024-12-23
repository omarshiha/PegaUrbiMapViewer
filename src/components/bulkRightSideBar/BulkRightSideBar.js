import {useEffect, useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Card, Col, Container, Form, ListGroup, Row, Table} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {GetAllInspectors} from "../../utils/GetAllIncidents";



function BulkRightSideBar({show, handleClose, incidents}) {
    const [key, setKey] = useState('1');
    const [cardType, setCardType] = useState('1');
    const [selectedIncidents, setSelectedIncidents] = useState([]);
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

    const handleCards = (type) => {
        setCardType(type)
    }

    const handleIncidentSelection = (checked) => {
        if(checked === true){
            selectedIncidents.push();
            setSelectedIncidents(selectedIncidents)
        }
        if(checked === false){
            selectedIncidents.push();
            setSelectedIncidents(selectedIncidents)
        }
    }

    return (
        <>

            <>
                <Offcanvas style={{ width: '92vw' }} show={show} onHide={handleClose} >
                    <Offcanvas.Header closeButton>
                       <Row style={{ width: '100%' }}>
                           <Col xs={3}> اسناد البلاغات</Col>
                           <Col xs={9}>
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
                       </Row>
                    </Offcanvas.Header>
                    <Container fluid className="d-flex flex-column" style={{ height: '100vh', marginTop: '15px' }}>
                      <Row>
                          <Col xs={3}>
                              <Row>
                                  <Col xs={12} style={{ justifyItems: 'center', cursor: 'pointer' }}>
                                      <Card style={{ width: '18rem', borderColor: cardType == "1" ? "#03766e" : ""}} onClick={() => handleCards("1")}>
                                          <Card.Body>
                                              <Card.Title style={{ textAlign: 'center' }}>تحديد البلاغات</Card.Title>
                                          </Card.Body>
                                      </Card>
                                  </Col>
                              </Row>
                              <br />
                              <Row>
                                  <Col xs={12} style={{ justifyItems: 'center', cursor: 'pointer' }}>
                                      <Card style={{ width: '18rem', borderColor: cardType == "2" ? "#03766e" : "" }} onClick={() => handleCards("2")}>
                                          <Card.Body>
                                              <Card.Title style={{ textAlign: 'center' }}>اسناد المراقب</Card.Title>
                                          </Card.Body>
                                      </Card>
                                  </Col>
                              </Row>
                          </Col>
                          <Col xs={9}>
                              {cardType == 1 && (
                                  <div style={{ maxHeight: "85vh", overflow: 'scroll' }}>
                                      <Table striped bordered hover>
                                          <thead>
                                          <tr>
                                              <th>
                                                  <Form.Check // prettier-ignore
                                                      type={"checkbox"}
                                                      id={`default-${"checkbox"}`}
                                                  />
                                              </th>
                                              <th>رمز البلاغ</th>
                                              <th>البلدية</th>
                                              <th>التصنيف الفرعي</th>
                                              <th>وضع الكشف</th>
                                              <th>قناة الكشف</th>
                                              <th>عمر البلاغ (أيام)</th>
                                              <th>الاولوية</th>
                                              <th></th>
                                          </tr>
                                          </thead>
                                          <tbody>
                                          {incidents && incidents.map((incident, i) => {
                                              return(
                                                  <tr>
                                                      <td>
                                                          <Form.Check // prettier-ignore
                                                              type={"checkbox"}
                                                              id={`default-${"checkbox"}`}
                                                          />
                                                      </td>
                                                      <td>{incident.ClassificationID}</td>
                                                      <td>{incident.SubMunicipalityName}</td>
                                                      <td>{incident.ClassificationName}</td>
                                                      <td>{incident.ExternalChannelName}</td>
                                                      <td>N/A</td>
                                                      <td>15</td>
                                                      <td>HIGH</td>
                                                      <td>Action</td>
                                                  </tr>
                                              )
                                          })}
                                          </tbody>
                                      </Table>
                                  </div>
                              )}
                              {cardType == 2 && (
                                  <ListGroup defaultActiveKey="#link1">
                                      {inspectors && inspectors.length && inspectors.map((inspector) => {
                                          return(
                                              <ListGroup.Item style={{ borderColor: inspector.pyUserIdentifier == activeInspector ? "#02776D" : "" }} action onClick={() => setActiveInspector(inspector.pyUserIdentifier)}>
                                                  {inspector.pyLabel}
                                              </ListGroup.Item>
                                          )
                                      })}

                                  </ListGroup>
                              )}
                          </Col>
                      </Row>
                    </Container>
                </Offcanvas>
            </>
        </>
    );
}

export default BulkRightSideBar;
