import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "./Footer";
import Scrol from "./Scrol";
import { useNavigate } from 'react-router-dom';



const Home=()=>{
  let image="https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  let navigate = useNavigate();
  function AboutPage()
   {
     navigate('/About');
   }
  return(
        <>
        <div className="bg-light">
         <Container fluid>
      <Row>
        <Col>
        <img src={image} alt="dkj"
          width="1326"
          height="700"/>
          <div className="index">
             <h1>Pankaj yadav</h1> 
             <p>I'm a professional illustrator from San Francisco</p>
            <button onClick={AboutPage} style={{width:"140px",backgroundColor:"green",border:"none", padding:"10px",borderRadius:"10px"} }>About me</button>
            </div>
        </Col>
      </Row>
    </Container>
    <Scrol/>
    </div>
   <Footer/>
        </>
    )
}
export default Home;