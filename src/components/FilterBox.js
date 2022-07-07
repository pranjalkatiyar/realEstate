import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import data from '../data';
import { useRef, useState } from 'react';
 

function ContainerFluidExample() {


    const [make, setmake] = useState("");
    const [model, setmodel] = useState("");
    const [price, setPrice] = useState("5000");
    const [type, setType] = useState("");
    const [ value, setValue ] = useState(null); 

    function handleChangemake(event) {
        setmake(event.target.value);
    }

    function handleChangeModel(event) {
        setmodel(event.target.value);
    }

    function handleChangePrice(event) {
        setPrice(event.target.value);
    }
    function handleChangeType(event) {
        setType(event.target.value);
    }

  
    return (
        <>
        {/* Filter container */}
            <Container fluid style={{
                width: '95%',
                borderRadius: '25px',
                padding: '50px 52px',
                backgroundColor: '#372323',
                position: 'relative',
                top: "-91px",
                zIndex: '2',
                boxShadow: 'rgb(178 153 153 / 21%) 5px 5px'
            }}>
                <Row>
                    <Col style={{ color: "white", fontStyle: '800' }}>
                        SEARCH PROPERTIES
                    </Col>
                </Row>
                <Row>
                {/* Location */}
                    <Col lg={3} md={6} sm={12}>
                    
                        <InputGroup className="mb-3">
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Location"
                                type="text"
                                className="filters"
                                onKeyUp={handleChangemake}
                            />
                        </InputGroup>
                    </Col>

{/* Type */}

<Col lg={2} md={6} sm={12}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Model"
                                type="text"
                                className="filters"
                                onKeyUp={handleChangeType}
                            />
                        </InputGroup>
                    </Col>


{/* Model */}
                    <Col lg={2} md={6} sm={12}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Model"
                                type="text"
                                className="filters"
                                onKeyUp={handleChangeModel}
                            />
                        </InputGroup>
                    </Col>


                {/* Price Filter */}

                    <Col lg={3} md={6} sm={12}>
                    <Row style={{position: 'relative',bottom: '32px'}}>
                    <Form.Label style={{color:'white'}}>Price</Form.Label>     

                    <Col lg={3} md={12}>
                    <InputGroup className="xs-3">
                                <InputGroup.Text>{price}</InputGroup.Text>
                                </InputGroup>
                    </Col>

                    <Col lg={6} md={12}>
                             <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Price"
                                type="range"
                                min="0"
                                max="10000"
                                value={price}
                                onChange={handleChangePrice}
                                className="filters" />
                    </Col>                                
                    <Col lg={3} md={12}>
                    <InputGroup className="xs-3">
                                <InputGroup.Text>Max:{10000}</InputGroup.Text>
                                </InputGroup>
                    </Col>
                    </Row>
                    </Col>

                    
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col style={{ textAlign: "center" }}>
                        <h1>Featured Listings</h1>
                    </Col>
                </Row>
            </Container>

{/* Cards Container */}
            <Container fluid   >

                <Row>
                    {data.filter(
                        (val) => {
                            const makeHouse = val.make.toLowerCase();
                            if (make == "")
                                return val;
                            else if (makeHouse.includes(make.toLowerCase())) {
                                return val;

                            }
                        }
                    ).filter((val) => {
                        const modelHouse = val.model.toLowerCase();
                        if (model == "")
                            return val;
                        else if (modelHouse.includes(model.toLowerCase())) {
                            return val;
                        }
                    })
                    .filter((val) => {
                            const typeHouse = val.type.toLowerCase();
                            console.log("type",typeHouse);
                            if (type == "")
                                return val;
                            else if (typeHouse.includes(type.toLowerCase())) {
                                return val;
                            }
                        })
                        .filter((val) => {
                            const priceHouse = val.price;
                           priceHouse.trim();
                           
                            if (price == "")
                                return val;
                            else if (parseInt(priceHouse)<parseInt(price)) {
                                return val;
                            }
                        })
                        
                        .map((item) => {
                            return (
                                <Col lg={4} md={6} xs={12} style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg" />
                                        <Card.Body>
                                            <Card.Title>Location:{item.make}</Card.Title>
                                            <Card.Text>Model:{item.model}</Card.Text>
                                            <Card.Text>Type:{item.type}</Card.Text>
                                            <Card.Text>Price:${item.price}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>

            <Container fluid style={{ padding: '0' }}>
            
                <div style={{ position: 'absolute' }}>
                    <img style={{ width: '100vw', height: '70vh' }} src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
                </div>
                <div style={{
                    width: '100vw', height: '70vh'
                    , position: 'relative', background: 'rgb(61,56,104)',
                    background: 'linear-gradient(0deg, rgba(61,56,104,1) 5%, rgba(162,137,139,0.5021358885351015) 100%)'
                }}>
                    <div style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        top: '11rem',
                        color: ' white',
                    }}>
                    <Col style={{padding:'0 5rem',textAlign:'center'}}>
                        <Row >
                        <h2>READY TO BUY?</h2>
                        </Row>
                        <Row style={{margin:'0 10rem'}}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate sapiente nobis amet, quibusdam modi atque commodi aperiam, velit cumque nam dolorem sint! Porro saepe doloremque est consectetur, accusamus facilis?</p>
                        <Button  size='lg' variant="success" style={{ cursor: 'pointer' }}>Find A Lender</Button>
                        </Row>
                    </Col>
                       
                    </div>
                </div>

            </Container>

        </>
    );
}

export default ContainerFluidExample;