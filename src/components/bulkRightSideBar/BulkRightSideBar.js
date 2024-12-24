import {useEffect, useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Alert, Card, Col, Container, Form, ListGroup, Row, Table} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {GetAllInspectors, pushToCIS} from "../../utils/GetAllIncidents";
import Button from "react-bootstrap/Button";
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg'
import { ReactComponent as SendIcon } from '../../assets/sendIcon.svg'
import { ReactComponent as DislikeIcon } from '../../assets/dislike.svg'


function BulkRightSideBar({show, handleClose, incidents}) {
    const [key, setKey] = useState('1');
    const [cardType, setCardType] = useState('1');
    const [selectedIncidents, setSelectedIncidents] = useState([]);
    const [selectedInspectors, setSelectedInspectors] = useState([]);
    const [inspectors, setInspectors] = useState([]);
    const [errors, setErrors] = useState("");
    const [errors1, setErrors1] = useState("");
    const [activeInspector, setActiveInspector] = useState("");

    useEffect( () => {

        const fetchData = async () => {
            const data = await GetAllInspectors()
            console.log(data)

            setInspectors( [
                        {
                            "pyLabel": "بدر محمد على",
                            "pyUserIdentifier": "103801222"
                        },
                        {
                            "pyLabel": "بدر عليثه على القاضى",
                            "pyUserIdentifier": "1038015002"
                        },
                        {
                            "pyLabel": "احمد على القاضى",
                            "pyUserIdentifier": "1038015003"
                        }
                ])

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

    const handleIncidentSelection = (e) => {
        let {checked} = e.target;
        let {id} = e.target;
        let incidentIndex = incidents.findIndex((incident) => incident.ID == id)
        if(incidentIndex != -1){
            if(checked === true){
                selectedIncidents.push(incidents[incidentIndex]);
                setSelectedIncidents([...selectedIncidents])
            }
            if(checked === false){
                let selectedIncidentIndex = selectedIncidents.findIndex((incident) => incident.ID == id)
                selectedIncidents.splice(selectedIncidentIndex, 1);
                setSelectedIncidents([...selectedIncidents])
            }
        }
    }

    const submit = () => {
        if(selectedInspectors.length == 0){
            setErrors("اختر علي الاقل مراقب واحد")
        }else{
            setErrors("")
        }
        if(selectedIncidents.length == 0){
            setErrors1("اختر علي الاقل بلاغ واحد")
        }else{
            setErrors1("")
        }
        if(!selectedIncidents.length || !selectedInspectors.length){
            return;
        }

        let csvs = selectedIncidents && selectedIncidents.map((selectedIncident) => {
            return selectedIncident.ID
        })
        pushToCIS(csvs, "aaa")
    }

    const calculateIncidentAge = (IncidentDate) => {

    }

    const handleInspectors = (userId) => {
        let inspectorIndex = inspectors.findIndex((inspector) => inspector.pyUserIdentifier == userId)
        if(inspectorIndex != -1){
        if(selectedInspectors.find((selectedInspector) => selectedInspector.pyUserIdentifier == userId)){
            let selectedInspectorIndex = selectedInspectors.findIndex((selectedInspector) => selectedInspector.pyUserIdentifier == userId)
            selectedInspectors.splice(selectedInspectorIndex, 1);
            setSelectedInspectors([...selectedInspectors])
        } else if(!selectedInspectors.find((selectedInspector) => selectedInspector.pyUserIdentifier == userId)){
                selectedInspectors.push(inspectors[inspectorIndex]);
                setSelectedInspectors([...selectedInspectors])
            }
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
                                   {" "}
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
                                  <>
                                  <div style={{ maxHeight: "70vh", overflowY: 'scroll' }}>
                                      <Table striped bordered hover>
                                          <thead>
                                          <tr>
                                              <th>
                                                  {/*<Form.Check // prettier-ignore*/}
                                                  {/*    type={"checkbox"}*/}
                                                  {/*    id={`default-${"checkbox"}`}*/}
                                                  {/*/>*/}
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
                                                              id={incident.ID}
                                                              onClick={handleIncidentSelection}
                                                              checked={selectedIncidents.find((selectedIncident) => selectedIncident.ID == incident.ID)}
                                                          />
                                                      </td>
                                                      <td>{incident.ExternalChannelIncidentID}</td>
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
                                  </>
                              )}
                              {cardType == 2 && (
                                  <ListGroup defaultActiveKey="#link1">
                                      {inspectors && inspectors.length && inspectors.map((inspector) => {
                                          let selected = selectedInspectors.find((selectedInspector) => selectedInspector.pyUserIdentifier == inspector.pyUserIdentifier)
                                          return(
                                              <ListGroup.Item style={{ marginTop: '10px',borderWidth: '2px', borderColor: selected ? "#02776D" : "" }} action onClick={() => handleInspectors(inspector.pyUserIdentifier)}>
                                                  {inspector.pyLabel}
                                              </ListGroup.Item>
                                          )
                                      })}
                                  </ListGroup>
                              )}
                          </Col>
                      </Row>
                        <br />
                        <br />
                        <Row>
                            <Col xs={3}>

                            </Col>
                            <Col xs={9}>
                                <Row>
                                    <Col xs={6}>
                                        <Button onClick={submit} style={{ backgroundColor: '#03766e', width: '150px', borderColor: '#fff'}} >
                                            <SendIcon />
                                            اسناد
                                        </Button>
                                        {" "}
                                        <label style={{ marginTop: '4px' }}>
                                            <DislikeIcon />
                                        </label>
                                        <label style={{ color: '#BD271E', textDecoration: 'underline', fontSize: '18px'}}>
                                            بلاغ غير صحيح
                                        </label>
                                    </Col>
                                    <Col className="d-flex justify-content-end" xs={6}>
                                        <Button onClick={handleClose} style={{ backgroundColor: '#fff', width: '150px', borderColor: '#e5e7ea', color: '#1F2A37'}} >
                                            الغاء
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {errors &&
                                            <>
                                                <Alert key={"danger"} variant={"danger"}>
                                                    {errors}
                                                </Alert>
                                            </>
                                        }
                                        {errors1 &&
                                            <>
                                                <Alert key={"danger"} variant={"danger"}>
                                                    {errors1}
                                                </Alert>
                                            </>
                                        }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Offcanvas>
            </>
        </>
    );
}

export default BulkRightSideBar;
