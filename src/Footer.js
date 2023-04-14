import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <>
        <div className="zsf">
        <Container fluid className="bg-white">
      <Row>
        <Col xs={6}><Link>facebook</Link></Col>
        <Col xs={6}><Link>twiiter</Link></Col>
        <Col xs={6}><Link>instagram</Link></Col>
        <Col xs={6}><Link>linkdin</Link></Col>
      </Row>
    </Container>
    </div>
        </>
    )
}
export default Footer;